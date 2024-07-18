import cv2
import numpy as np
import pandas as pd
import pickle
import mediapipe as mp
import os

from utils import extract_important_keypoints, get_drawing_color

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose


class PlankDetection:
    ML_MODEL_PATH = "./core/plank_model/model/LR_model.pkl"
    INPUT_SCALER_PATH = "./core/plank_model/model/input_scaler.pkl"
    PREDICTION_PROBABILITY_THRESHOLD = 0.6

    def __init__(self) -> None:
        # print(os.listdir())
        self.init_important_landmarks()
        self.load_machine_learning_model()

        self.previous_stage = "unknown"
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
            "LEFT_ELBOW",
            "RIGHT_ELBOW",
            "LEFT_WRIST",
            "RIGHT_WRIST",
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


