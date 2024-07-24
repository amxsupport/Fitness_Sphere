import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Temp from "../../assets/food/banana.jpg";
import ReactPlayer from "react-player";
import { WebcamRecord } from "../../components/WebcamRecord";

const workouts = [
    {
        id: 1,
        name: "Planks",
        value: "plank",
        description:
            "The plank is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.",
        image: "https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg",
    },
    {
        id: 2,
        value: "bicep_curl",
        name: "Bicep Curls",
        description:
            "Biceps curls are one of the most popular exercises to build arm strength and muscle definition.",
        image: "https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg",
    },
    {
        id: 3,
        name: "Squats",
        value: "squat",
        description:
            "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.",
        image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/humans-868695_960_720.jpg",
    },
    {
        id: 4,
        name: "Lunges",
        value: "lunge",
        description:
            "A lunge can refer to any position of the human body where one leg is positioned forward with knee bent and foot flat on the ground while the other leg is positioned behind.",
        image: "https://www.verywellfit.com/thmb/4Z8n5NtZQp0QH5j2v8Z1G0qQ1tI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plank-exercise-4098288-0b2c8f0c0b9b4d5b9a9b5b0e9d0f7d1b.jpg",
    },


