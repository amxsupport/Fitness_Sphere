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


def pose_detection(
    video_file_path: str, video_name_to_save: str, rescale_percent: float = 40
):
    """Pose detection with MediaPipe Pose

    Args:
        video_file_path (str): path to video
        video_name_to_save (str): path to save analyzed video
        rescale_percent (float, optional): Percentage to scale back from the original video size. Defaults to 40.

    """
    cap = cv2.VideoCapture(video_file_path)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH) * rescale_percent / 100)
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT) * rescale_percent / 100)
    size = (width, height)
    fps = int(cap.get(cv2.CAP_PROP_FPS))

    fourcc = cv2.VideoWriter_fourcc(*"avc1")
    save_to_path = f"videos/{video_name_to_save}.mp4"
    out = cv2.VideoWriter(save_to_path, fourcc, fps, size)

    print("PROCESSING VIDEO ...")
    with mp_pose.Pose(
        min_detection_confidence=0.8, min_tracking_confidence=0.8
    ) as pose:
        while cap.isOpened():
            ret, image = cap.read()

            if not ret:
                break

            image = rescale_frame(image, rescale_percent)

            # Recolor image from BGR to RGB for mediapipe
            image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
            image.flags.writeable = False

            results = pose.process(image)

            # Recolor image from BGR to RGB for mediapipe
            image.flags.writeable = True
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

            mp_drawing.draw_landmarks(
                image,
                results.pose_landmarks,
                mp_pose.POSE_CONNECTIONS,
                mp_drawing.DrawingSpec(
                    color=(244, 117, 66), thickness=2, circle_radius=2
                ),
                mp_drawing.DrawingSpec(
                    color=(245, 66, 230), thickness=2, circle_radius=1
                ),
            )

            out.write(image)

    print(f"PROCESSED, save to {save_to_path}.")
    return



