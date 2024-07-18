import cv2, pickle
import mediapipe as mp
import numpy as np
import pandas as pd

from utils import (
    calculate_angle,
    extract_important_keypoints,
    get_drawing_color,
)

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose


def analyze_knee_angle(
    mp_results,
    stage: str,
    angle_thresholds: list,
    knee_over_toe: bool = False,
    draw_to_image: tuple = None,
) -> dict:
    results = {
        "error": None,
        "right": {"error": None, "angle": None},
        "left": {"error": None, "angle": None},
    }

    landmarks = mp_results.pose_landmarks.landmark

    # Calculate right knee angle
    right_hip = [
        landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].x,
        landmarks[mp_pose.PoseLandmark.RIGHT_HIP.value].y,
    ]
    right_knee = [
        landmarks[mp_pose.PoseLandmark.RIGHT_KNEE.value].x,
        landmarks[mp_pose.PoseLandmark.RIGHT_KNEE.value].y,
    ]
    right_ankle = [
        landmarks[mp_pose.PoseLandmark.RIGHT_ANKLE.value].x,
        landmarks[mp_pose.PoseLandmark.RIGHT_ANKLE.value].y,
    ]
    results["right"]["angle"] = calculate_angle(right_hip, right_knee, right_ankle)

    # Calculate left knee angle
    left_hip = [
        landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].x,
        landmarks[mp_pose.PoseLandmark.LEFT_HIP.value].y,
    ]
    left_knee = [
        landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].x,
        landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value].y,
    ]
    left_ankle = [
        landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].x,
        landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value].y,
    ]
    results["left"]["angle"] = calculate_angle(left_hip, left_knee, left_ankle)

    # Draw to image
    if draw_to_image is not None and stage != "down":
        (image, video_dimensions) = draw_to_image

        # Visualize angles
        cv2.putText(
            image,
            str(int(results["right"]["angle"])),
            tuple(np.multiply(right_knee, video_dimensions).astype(int)),
            cv2.QT_FONT_NORMAL,
            0.5,
            (255, 255, 255),
            1,
            cv2.LINE_AA,
        )
        cv2.putText(
            image,
            str(int(results["left"]["angle"])),
            tuple(np.multiply(left_knee, video_dimensions).astype(int)),
            cv2.QT_FONT_NORMAL,
            0.5,
            (255, 255, 255),
            1,
            cv2.LINE_AA,
        )

    if stage != "down":
        return results

    # Ignore checking for knee angle error if knee_over_toe error occur
    if knee_over_toe:
        return results

    # Evaluation
    results["error"] = False

    if angle_thresholds[0] <= results["right"]["angle"] <= angle_thresholds[1]:
        results["right"]["error"] = False
    else:
        results["right"]["error"] = True
        results["error"] = True

    if angle_thresholds[0] <= results["left"]["angle"] <= angle_thresholds[1]:
        results["left"]["error"] = False
    else:
        results["left"]["error"] = True
        results["error"] = True

    # Draw to image
    if draw_to_image is not None:
        (image, video_dimensions) = draw_to_image

        if results["error"]:
            cv2.rectangle(image, (0, 50), (120, 100), (199,89,255), -1)
            cv2.putText(
                image,
                "KNEE ANGLE ERROR",
                (10, 62),
                cv2.QT_FONT_NORMAL,
                0.3,
                (0, 0, 0),
                1,
                cv2.LINE_AA,
            )
            cv2.putText(
                image,
                "LEFT KNEE" if results["left"]["error"] else "RIGHT KNEE",
                (10, 82),
                cv2.QT_FONT_NORMAL,
                0.3,
                (255, 255, 255),
                1,
                cv2.LINE_AA,
            )

        right_color = (255, 255, 255) if not results["right"]["error"] else (0, 0, 255)
        left_color = (255, 255, 255) if not results["left"]["error"] else (0, 0, 255)

        # Visualize angles
        cv2.putText(
            image,
            str(int(results["right"]["angle"])),
            tuple(np.multiply(right_knee, video_dimensions).astype(int)),
            cv2.QT_FONT_NORMAL,
            0.5,
            right_color,
            1,
            cv2.LINE_AA,
        )
        cv2.putText(
            image,
            str(int(results["left"]["angle"])),
            tuple(np.multiply(left_knee, video_dimensions).astype(int)),
            cv2.QT_FONT_NORMAL,
            0.5,
            left_color,
            1,
            cv2.LINE_AA,
        )

    return results

class LungeDetection:
    STAGE_ML_MODEL_PATH = "./core/lunge_model/model/sklearn/stage_LR_model.pkl"
    ERR_ML_MODEL_PATH = "./core/lunge_model/model/sklearn/err_LR_model.pkl"
    INPUT_SCALER_PATH = "./core/lunge_model/model/input_scaler.pkl"

    PREDICTION_PROB_THRESHOLD = 0.8
    KNEE_ANGLE_THRESHOLD = [60, 125]

    def __init__(self) -> None:
        self.init_important_landmarks()
        self.load_machine_learning_model()

        self.current_stage = ""
        self.counter = 0
        self.results = []
        self.has_error = False

    def init_important_landmarks(self) -> None:
        """
        Determine Important landmarks for lunge detection
        """

        self.important_landmarks = [
            "NOSE",
            "LEFT_SHOULDER",
            "RIGHT_SHOULDER",
            "LEFT_HIP",
            "RIGHT_HIP",
            "LEFT_KNEE",
            "RIGHT_KNEE",
            "LEFT_ANKLE",
            "RIGHT_ANKLE",
            "LEFT_HEEL",
            "RIGHT_HEEL",
            "LEFT_FOOT_INDEX",
            "RIGHT_FOOT_INDEX",
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
        if (
            not self.STAGE_ML_MODEL_PATH
            or not self.INPUT_SCALER_PATH
            or not self.ERR_ML_MODEL_PATH
        ):
            print("Cannot found lunge files for prediction")

        try:
            with open(self.ERR_ML_MODEL_PATH, "rb") as f:
                self.err_model = pickle.load(f)

            with open(self.STAGE_ML_MODEL_PATH, "rb") as f:
                self.stage_model = pickle.load(f)

            with open(self.INPUT_SCALER_PATH, "rb") as f2:
                self.input_scaler = pickle.load(f2)
        except Exception as e:
            print(f"Error loading model, {e}")


