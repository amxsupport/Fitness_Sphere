import os
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import shutil
from fastapi.middleware.cors import CORSMiddleware

from icrawler.builtin import GoogleImageCrawler
from PIL import Image
import base64
from io import BytesIO
import time

from start import exercise_detection
from fastapi.staticfiles import StaticFiles
from datetime import datetime
from gcsa.google_calendar import GoogleCalendar
from gcsa.conference import ConferenceSolutionCreateRequest, SolutionType
from gcsa.event import Event
from beautiful_date import *

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/videos", StaticFiles(directory="videos"), name="videos")

REPS = 0


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/upload-video")
async def upload_video(file: UploadFile = File(...), exercise_type: str = None):
    print(exercise_type)
    now = datetime.now()
    now = int(now.strftime("%Y%m%d%H%M%S"))
    name_to_save = f"video_{now}.mp4"

    with open(f"videos/{name_to_save}", "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    print("file saved")
    print("PROCESSING VIDEO ...")

    results, *other_data = exercise_detection(
        video_file_path=f"videos/{name_to_save}",
        video_name_to_save=name_to_save,
        exercise_type=exercise_type,
        rescale_percent=40,
    )
    
    global REPS
    REPS = other_data[0]

    host = "/"
    for index, error in enumerate(results):
        if error["frame"]:
            # save the image to static/images

            results[index]["frame"] = f"{host}static/images/{error['frame']}"

    response_data = {
        "type": exercise_type,
        "processed": True,
        "file_name": f"{host}videos/video1.mp4",
        "details": results,
    }
    # Handle others data
    if exercise_type in {"squat", "lunge", "bicep_curl"}:
        response_data["counter"] = other_data[0]

    return JSONResponse(status_code=200, content=response_data)


