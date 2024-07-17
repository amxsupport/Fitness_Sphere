import mediapipe as mp
import cv2

from plank import PlankDetection
from bicep_curl import BicepCurlDetection
from squat import SquatDetection
from lunge import LungeDetection
from utils import rescale_frame

# print("one")
# Drawing helpers
mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose


EXERCISE_DETECTIONS = {
    "plank": PlankDetection(),
    "bicep_curl": BicepCurlDetection(),
    "squat": SquatDetection(),
    "lunge": LungeDetection(),
}



