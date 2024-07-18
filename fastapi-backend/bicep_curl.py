import mediapipe as mp
import cv2
import numpy as np
import pandas as pd
import pickle
import traceback

from utils import (
    calculate_angle,
    extract_important_keypoints,
    get_drawing_color,
)

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose


class BicepPoseAnalysis:
    def __init__(
        self,
        side: str,
        stage_down_threshold: float,
        stage_up_threshold: float,
        peak_contraction_threshold: float,
        loose_upper_arm_angle_threshold: float,
        visibility_threshold: float,
    ):
        # Initialize thresholds
        self.stage_down_threshold = stage_down_threshold
        self.stage_up_threshold = stage_up_threshold
        self.peak_contraction_threshold = peak_contraction_threshold
        self.loose_upper_arm_angle_threshold = loose_upper_arm_angle_threshold
        self.visibility_threshold = visibility_threshold

        self.side = side
        self.counter = 0
        self.stage = "down"
        self.is_visible = True
        self.detected_errors = {
            "LOOSE_UPPER_ARM": 0,
            "PEAK_CONTRACTION": 0,
        }

        # Params for loose upper arm error detection
        self.loose_upper_arm = False

        # Params for peak contraction error detection
        self.peak_contraction_angle = 1000

    def get_joints(self, landmarks) -> bool:
        """
        Check for joints' visibility then get joints coordinate
        """
        side = self.side.upper()

        # Check visibility
        joints_visibility = [
            landmarks[mp_pose.PoseLandmark[f"{side}_SHOULDER"].value].visibility,
            landmarks[mp_pose.PoseLandmark[f"{side}_ELBOW"].value].visibility,
            landmarks[mp_pose.PoseLandmark[f"{side}_WRIST"].value].visibility,
        ]

        is_visible = all(vis > self.visibility_threshold for vis in joints_visibility)
        self.is_visible = is_visible

        if not is_visible:
            return self.is_visible

        # Get joints' coordinates
        self.shoulder = [
            landmarks[mp_pose.PoseLandmark[f"{side}_SHOULDER"].value].x,
            landmarks[mp_pose.PoseLandmark[f"{side}_SHOULDER"].value].y,
        ]
        self.elbow = [
            landmarks[mp_pose.PoseLandmark[f"{side}_ELBOW"].value].x,
            landmarks[mp_pose.PoseLandmark[f"{side}_ELBOW"].value].y,
        ]
        self.wrist = [
            landmarks[mp_pose.PoseLandmark[f"{side}_WRIST"].value].x,
            landmarks[mp_pose.PoseLandmark[f"{side}_WRIST"].value].y,
        ]

        return self.is_visible

    def analyze_pose(
        self,
        landmarks,
        frame,
        results,
        timestamp: int,
        lean_back_error: bool = False,
    ):
        """Analyze angles of an arm for error detection

        Args:
            landmarks (): MediaPipe Pose landmarks
            frame (): OpenCV frame
            results (): MediaPipe Pose results
            timestamp (int): timestamp of the frame
            lean_back_error (bool, optional): If there is an lean back error detected, ignore the analysis. Defaults to False.

        Returns:
            _type_: _description_
        """
        has_error = False
        self.get_joints(landmarks)

        # Cancel calculation if visibility is poor
        if not self.is_visible:
            return (None, None, has_error)

        # * Calculate curl angle for counter
        bicep_curl_angle = int(calculate_angle(self.shoulder, self.elbow, self.wrist))
        if bicep_curl_angle > self.stage_down_threshold:
            self.stage = "down"
        elif bicep_curl_angle < self.stage_up_threshold and self.stage == "down":
            self.stage = "up"
            self.counter += 1

        # * Calculate the angle between the upper arm (shoulder & joint) and the Y axis
        shoulder_projection = [
            self.shoulder[0],
            1,
        ]  # Represent the projection of the shoulder to the X axis
        ground_upper_arm_angle = int(
            calculate_angle(self.elbow, self.shoulder, shoulder_projection)
        )

        # Stop analysis if lean back error is occur
        if lean_back_error:
            return (bicep_curl_angle, ground_upper_arm_angle, has_error)

        # * Evaluation for LOOSE UPPER ARM error
        if ground_upper_arm_angle > self.loose_upper_arm_angle_threshold:
            has_error = True
            self._extracted_from_analyze_pose_52(frame, "LOOSE UPPER ARM")
            # Limit the saved frame
            if not self.loose_upper_arm:
                self.loose_upper_arm = True
                self.detected_errors["LOOSE_UPPER_ARM"] += 1
                results.append(
                    {"stage": "loose upper arm", "frame": frame, "timestamp": timestamp}
                )
        else:
            self.loose_upper_arm = False

        # * Evaluate PEAK CONTRACTION error
        if self.stage == "up" and bicep_curl_angle < self.peak_contraction_angle:
            # Save peaked contraction every rep
            self.peak_contraction_angle = bicep_curl_angle

        elif self.stage == "down":
            # * Evaluate if the peak is higher than the threshold if True, marked as an error then saved that frame
            if (
                self.peak_contraction_angle != 1000
                and self.peak_contraction_angle >= self.peak_contraction_threshold
            ):
                self._extracted_from_analyze_pose_52(frame, "WEAK PEAK CONTRACTION")
                self.detected_errors["PEAK_CONTRACTION"] += 1
                results.append(
                    {
                        "stage": "peak contraction",
                        "frame": frame,
                        "timestamp": timestamp,
                    }
                )
                has_error = True

            # Reset params
            self.peak_contraction_angle = 1000

        return (bicep_curl_angle, ground_upper_arm_angle, has_error)

    # TODO Rename this here and in `analyze_pose`
    def _extracted_from_analyze_pose_52(self, frame, arg1):
        cv2.rectangle(frame, (350, 0), (600, 40), (245, 117, 16), -1)
        cv2.putText(
            frame,
            "ARM ERROR",
            (360, 12),
            cv2.QT_FONT_NORMAL,
            0.5,
            (0, 0, 0),
            1,
            cv2.LINE_AA,
        )
        cv2.putText(
            frame,
            arg1,
            (355, 30),
            cv2.QT_FONT_NORMAL,
            0.5,
            (255, 255, 255),
            1,
            cv2.LINE_AA,
        )

    def get_counter(self) -> int:
        return self.counter

    def reset(self):
        self.counter = 0
        self.stage = "down"
        self.is_visible = True
        self.detected_errors = {
            "LOOSE_UPPER_ARM": 0,
            "PEAK_CONTRACTION": 0,
        }

        # Params for loose upper arm error detection
        self.loose_upper_arm = False

        # Params for peak contraction error detection
        self.peak_contraction_angle = 1000


class BicepCurlDetection:
    ML_MODEL_PATH = "./core/bicep_model/model/KNN_model.pkl"
    INPUT_SCALER = "./core/bicep_model/model/input_scaler.pkl"

    VISIBILITY_THRESHOLD = 0.65

    # Params for counter
    STAGE_UP_THRESHOLD = 100
    STAGE_DOWN_THRESHOLD = 120

    # Params to catch FULL RANGE OF MOTION error
    PEAK_CONTRACTION_THRESHOLD = 60

    # LOOSE UPPER ARM error detection
    LOOSE_UPPER_ARM = False
    LOOSE_UPPER_ARM_ANGLE_THRESHOLD = 40

    # STANDING POSTURE error detection
    POSTURE_ERROR_THRESHOLD = 0.95

    def __init__(self) -> None:
        self.init_important_landmarks()
        self.load_machine_learning_model()

        self.left_arm_analysis = BicepPoseAnalysis(
            side="left",
            stage_down_threshold=self.STAGE_DOWN_THRESHOLD,
            stage_up_threshold=self.STAGE_UP_THRESHOLD,
            peak_contraction_threshold=self.PEAK_CONTRACTION_THRESHOLD,
            loose_upper_arm_angle_threshold=self.LOOSE_UPPER_ARM_ANGLE_THRESHOLD,
            visibility_threshold=self.VISIBILITY_THRESHOLD,
        )

        self.right_arm_analysis = BicepPoseAnalysis(
            side="right",
            stage_down_threshold=self.STAGE_DOWN_THRESHOLD,
            stage_up_threshold=self.STAGE_UP_THRESHOLD,
            peak_contraction_threshold=self.PEAK_CONTRACTION_THRESHOLD,
            loose_upper_arm_angle_threshold=self.LOOSE_UPPER_ARM_ANGLE_THRESHOLD,
            visibility_threshold=self.VISIBILITY_THRESHOLD,
        )

        self.stand_posture = 0
        self.previous_stand_posture = 0
        self.results = []
        self.has_error = False

    def init_important_landmarks(self) -> None:
        """
        Determine Important landmarks for plank detection
        """

        self.important_landmarks = [
            "NOSE",
            "LEFT_SHOULDER",
            "RIGHT_SHOULDER",
            "RIGHT_ELBOW",
            "LEFT_ELBOW",
            "RIGHT_WRIST",
            "LEFT_WRIST",
            "LEFT_HIP",
            "RIGHT_HIP",
        ]

        # Generate all columns of the data frame
        self.headers = ["label"]  # Label column

        for lm in self.important_landmarks:
            self.headers += [
                f"{lm.lower()}_x",
                f"{lm.lower()}_y",
                f"{lm.lower()}_z",
                f"{lm.lower()}_v",
            ]

    def load_machine_learning_model(self) -> None:
        """
        Load machine learning model
        """
        if not self.ML_MODEL_PATH:
            print("Cannot found plank model")

        try:
            with open(self.ML_MODEL_PATH, "rb") as f:
                self.model = pickle.load(f)

            with open(self.INPUT_SCALER, "rb") as f2:
                self.input_scaler = pickle.load(f2)
        except Exception as e:
            print(f"Error loading model, {e}")

    def handle_detected_results(self, video_name: str) -> tuple:
        """
        Save frame as evidence
        """
        file_name, _ = video_name.split(".")
        save_folder = "./static/images/"
        for index, error in enumerate(self.results):
            try:
                image_name = f"{file_name}_{index}.jpg"
                cv2.imwrite(f"{save_folder}/{file_name}_{index}.jpg", error["frame"])
                self.results[index]["frame"] = image_name
            except Exception as e:
                print(f"ERROR cannot save frame: {str(e)}")
                self.results[index]["frame"] = None

        return self.results, {
            "left_counter": self.left_arm_analysis.get_counter(),
            "right_counter": self.right_arm_analysis.get_counter(),
        }

    def clear_results(self) -> None:
        self.stand_posture = 0
        self.previous_stand_posture = 0
        self.results = []
        self.has_error = False

        self.right_arm_analysis.reset()
        self.left_arm_analysis.reset()

    def detect(
        self,
        mp_results,
        image,
        timestamp: int,
    ) -> None:
        self.has_error = False

        try:
            self._extracted_from_detect_17(image, mp_results, timestamp)
        except Exception as e:
            traceback.print_exc()
            raise e


