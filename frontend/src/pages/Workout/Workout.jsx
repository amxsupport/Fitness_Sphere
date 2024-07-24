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

    // Capture and send a frame every second
    useEffect(() => {
        let interval = null;

        if (capturing) {
            interval = setInterval(() => {
                captureAndSendFrame();
                // console.log("capturing");
            }, 1000);
        } else if (interval) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [capturing]);

    // Start the interview - toggle full screen, read the first question and start capturing
    const startInterview = async () => {
        // toggleFullScreen();
        // if (questions.length > 0) {
        //     setCurrentQuestionIndex(0);
        //     setTimeout(() => {
        //         speakQuestion(questions[0]); // Read the first question
        //     }, 2000);
        //     // speakQuestion(questions[0]);
        // }

        setShowNext(true);
        startRecording();

        // code to start webcam and capture frames
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setCapturing(true);
            }
        } catch (error) {
            console.error("Error accessing webcam:", error);
        }
    };

    // Stop the interview - stop capturing, reset the interview type and current question index
    const stopInterview = () => {
        if (videoRef.current) {
            const stream = videoRef.current.srcObject;
            const tracks = stream.getTracks();

            tracks.forEach((track) => {
                track.stop();
            });

            videoRef.current.srcObject = null;
        }

        setCapturing(false);
        setInterviewType("");
        setCurrentQuestionIndex(0);
        setShowAns(false);
        setShowNext(false);
        // toggleFullScreen();
        stopRecording();
    };

    // Capture a frame and send it to the backend
    const captureAndSendFrame = () => {
        if (capturing) {
            const video = videoRef.current;
            const canvas = canvasRef.current;

            if (video && canvas) {
                const context = canvas.getContext("2d");
                if (!context) {
                    return;
                }
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                console.log(canvas.width, canvas.height);
                context.drawImage(video, 0, 0, canvas.width, canvas.height);

                const image_base64 = canvas.toDataURL();

                // Send the frame data to the FastAPI backend
                try {
                    // const params = new URLSearchParams({
                    //     image_base64,
                    // });
                    fetch(
                        // `${process.env.NEXT_PUBLIC_BACKEND_URL}/get_image?${params}`,
                        `https://datahack-backend.onrender.com/api/get_image`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                redirect: "follow",
                            },
                            body: JSON.stringify({ image_base64 }),
                        }
                    );
                } catch (error) {
                    if (error == "No face detected") {
                        alert("No face detected!");
                    }
                    if (error == "More than one face detected") {
                        alert("More than one face detected!");
                    }
                    console.error("Error sending frame data:", error);
                }
            }
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full min-h-[80vh]">
            <div className="flex-grow w-full flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center items-center gap-4 md:h-auto flex-col md:flex-row">
                    {/* video of the user */}
                    <video
                        className="p-4 bg-gray-200 rounded-lg shadow-md"
                        ref={videoRef}
                        autoPlay={true}
                        style={{ display: capturing ? "block" : "none" }}
                    />

                    {/* container to show and display questions and buttons like show answer and next question */}
                    <div
                        className="p-4 bg-gray-200 rounded-lg shadow-md h-full max-w-md"
                        style={{ display: capturing ? "block" : "none" }}
                    >
                        <div className="flex flex-col justify-center items-center gap-4">
                            <dotlottie-player
                                autoplay
                                loop
                                mode="normal"
                                src="/lottie/workout.lottie"
                                style={{
                                    width: "100%",
                                }}
                            ></dotlottie-player>
                        </div>
                    </div>
                </div>

                {/* contains buttons to start and stop the interview */}
                <div className="flex justify-center items-center gap-8">
                    <button
                        className="p-4 bg-blue-500 text-white hover:bg-blue-600 hover:tracking-wider transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={startInterview}
                        disabled={capturing}
                    >
                        Start Exercise
                    </button>

                    <canvas ref={canvasRef} style={{ display: "none" }} />
                    <button
                        className="p-4 bg- text-white bg-red-500 hover:bg-red-600 hover:tracking-wider transition-all duration-300 rounded-lg disabled:opacity-75 disabled:cursor-not-allowed"
                        onClick={stopInterview}
                        disabled={!capturing}
                    >
                        Stop Exercise
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Workout;
