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


