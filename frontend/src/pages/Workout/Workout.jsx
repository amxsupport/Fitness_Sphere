import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Workout = () => {
    const videoRef = React.useRef(null);
    const canvasRef = React.useRef(null);

    const [capturing, setCapturing] = React.useState(false);

    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

    const [isFullScreen, setIsFullScreen] = useState(false);

    const [showAns, setShowAns] = React.useState(false);
    const [showNext, setShowNext] = React.useState(false);

    const questions = ["What is your name?", "What is your age?"];

    const answers = ["My name is John Doe", "I am 21 years old"];

    const [record, setRecord] = useState(false);

    const startRecording = () => {
        setRecord(true);
    };

    const stopRecording = () => {
        setRecord(false);
    };

    const onData = (recordedBlob) => {
        console.log("chunk of real-time data is: ", recordedBlob);
    };

    const onStop = async (recordedBlob) => {
        console.log("recordedBlob is: ", recordedBlob);
        console.log("recordedBlob is: ", recordedBlob.blobURL);
        console.log("recordedBlob is: ", recordedBlob.blob);

        // send blob to backend

        // fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/analyze_audio`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         redirect: "follow",
        //     },
        //     body: JSON.stringify({ audio_blob: JSON.stringify(recordedBlob.blob) }),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         return data;
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        // const formData = new FormData();
        // formData.append("audio_blob", recordedBlob.blob, "audio.wav");

        // Send the formData to the backend
        // fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/analyze_audio`, {
        //     method: "POST",
        //     body: formData,
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         return data;
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };


