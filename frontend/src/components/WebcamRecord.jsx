import React from "react";
import { useRecordWebcam, CAMERA_STATUS } from "react-record-webcam";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const OPTIONS = {
    filename: "test-filename",
    fileType: "mp4",
    width: 1920,
    height: 1080,
};

export function WebcamRecord({
    toggleModal,
    setVideo,
    setSelectedWorkout,
    workouts,
}) {
    const recordWebcam = useRecordWebcam(OPTIONS);
    const getRecordingFileHooks = async () => {
        const blob = await recordWebcam.getRecording();
        console.log({ blob });
        setVideo(blob);
        setLoading(true);
    };

    const [loading, setLoading] = React.useState(false);

    const handleClose = () => {
        recordWebcam.close();
        toggleModal();
    };

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-[1000] bg-black/25 overflow-y-auto scrollbar-hide rounded-lg">
            <div className="absolute inset-4 md:inset-16 md:right-16 bg-violet-100 overflow-y-auto scrollbar-hide rounded-lg">
                <div className="w-full h-full flex flex-col pt-8">
                    {/* Close Button */}
                    <RxCross2
                        className="absolute top-4 right-4 cursor-pointer"
                        onClick={handleClose}
                    />

                    <div className="w-full p-4">
                        <button
                            onClick={recordWebcam.open}
                            className="px-3 py-1 bg-[#c759ff] rounded-lg text-white"
                        >
                            Open camera
                        </button>
                    </div>
                    <div className="w-full p-4">
                        <div className="device">
                            <p
                                className="text-lg font-semibold"
                                style={{
                                    marginBlock: "0",
                                }}
                            >
                                Live
                            </p>
                            <div className="device-list">
                                <small>Status: {recordWebcam.status}</small>
                            </div>
                            <video
                                ref={recordWebcam.webcamRef}
                                style={{
                                    display: `${
                                        recordWebcam.status ===
                                            CAMERA_STATUS.OPEN ||
                                        recordWebcam.status ===
                                            CAMERA_STATUS.RECORDING
                                            ? "block"
                                            : "none"
                                    }`,
                                }}
                                autoPlay
                                muted
                            />
                            <div className="flex gap-2">
                                <button
                                    className={`px-3 py-1 rounded-lg text-white
                                            ${
                                                recordWebcam.status ===
                                                    CAMERA_STATUS.CLOSED ||
                                                recordWebcam.status ===
                                                    CAMERA_STATUS.RECORDING ||
                                                recordWebcam.status ===
                                                    CAMERA_STATUS.PREVIEW
                                                    ? "bg-gray-400"
                                                    : "bg-[#c759ff] hover:bg-violet-700"
                                            }
                                        `}
                                    disabled={
                                        recordWebcam.status ===
                                            CAMERA_STATUS.CLOSED ||
                                        recordWebcam.status ===
                                            CAMERA_STATUS.RECORDING ||
                                        recordWebcam.status ===
                                            CAMERA_STATUS.PREVIEW
                                    }
                                    onClick={recordWebcam.start}
                                >
                                    Record
                                </button>
                                {/* <button
                                    className={`px-3 py-1 rounded-lg text-white
                                            ${recordWebcam.status !== "RECORDING" && recordWebcam.status !== "PAUSED" ? "bg-gray-400" : "bg-[#c759ff] hover:bg-violet-700"}
                                        `}
                                    disabled={
                                        recordWebcam.status !== "RECORDING" &&
                                        recordWebcam.status !== "PAUSED"
                                    }
                                    onClick={() =>
                                        recordWebcam.status === "PAUSED"
                                            ? resumeRecording(recordWebcam.id)
                                            : pauseRecording(recordWebcam.id)
                                    }
                                >
                                    {recordWebcam.status === "PAUSED" ? "Resume" : "Pause"}
                                </button> */}
                                {/* <button
                                        className={recordWebcam.isMuted ? "px-3 py-1 bg-[#c759ff] hover:bg-violet-700 rounded-lg text-white" : "px-3 py-1 bg-red-500 hover:bg-red-700 rounded-lg text-white"}
                                        onClick={() => muteRecording(recordWebcam.id)}
                                    >
                                        Mute
                                    </button> */}
                                <button
                                    className={`px-3 py-1 bg-red-500 hover:bg-red-700 rounded-lg text-white
                                            ${
                                                recordWebcam.status !==
                                                CAMERA_STATUS.RECORDING
                                                    ? "bg-gray-400"
                                                    : "bg-[#c759ff] hover:bg-violet-700"
                                            }
                                        `}
                                    disabled={
                                        recordWebcam.status !==
                                        CAMERA_STATUS.RECORDING
                                    }
                                    onClick={recordWebcam.stop}
                                >
                                    Stop
                                </button>
                                {/* <button
                                    className={`px-3 py-1 bg-red-500 hover:bg-red-700 rounded-lg text-white`}
                                    onClick={() => cancelRecording(recordWebcam.id)}>
                                    Cancel
                                </button> */}
                            </div>
                            <div
                                className="
                                    flex
                                    flex-col
                                    gap-2
                                    p-4
                                    border-2
                                    border-gray-300
                                    rounded-lg
                                    bg-gray-50
                                    mt-4
                                "
                            >
                                <p
                                    style={{
                                        marginBlockStart: "0",
                                    }}
                                    className="text-lg font-semibold"
                                >
                                    Preview
                                </p>
                                <video
                                    ref={recordWebcam.previewRef}
                                    style={{
                                        display: `${
                                            recordWebcam.status ===
                                            CAMERA_STATUS.PREVIEW
                                                ? "block"
                                                : "none"
                                        }`,
                                    }}
                                    controls
                                />
                                <div
                                    className="
                                        flex
                                        flex-row
                                        flex-wrap
                                        gap-2
                                        justify-end
                                    "
                                >
                                    <button
                                        onClick={recordWebcam.download}
                                        className="px-3 py-1 bg-[#c759ff] hover:bg-violet-700 rounded-lg text-white"
                                    >
                                        Download
                                    </button>
                                    <button
                                        onClick={recordWebcam.retake}
                                        className="px-3 py-1 bg-red-500 hover:bg-red-700 rounded-lg text-white"
                                    >
                                        Clear preview
                                    </button>

                                    <button
                                        className="px-3 py-1 bg-red-500 hover:bg-red-700 rounded-lg text-white"
                                        // disabled={recordWebcam.status !== "RECORDING"}
                                        onClick={getRecordingFileHooks}
                                    >
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Loading with 4 circuler pulses */}
                    {loading && (
                        <div className="w-full p-4 flex justify-center">
                            <div className="flex gap-2">
                                {workouts.map((workout) => (
                                    <div
                                        onClick={() => {
                                            setSelectedWorkout(workout?.value);
                                            console.log(workout?.value);
                                            setLoading(false);
                                            toggleModal();
                                        }}
                                        key={workout.id}
                                        className="w-4 h-4 bg-gray-400 rounded-full animate-pulse"
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
