import {
  RecordWebcam,
  useRecordWebcam,
  CAMERA_STATUS
} from "react-record-webcam";
const OPTIONS = {
  filename: "test-filename",
  fileType: "mp4",
  width: 1920,
  height: 1080
};


export default function App() {
  const recordWebcam = useRecordWebcam(OPTIONS);
  const getRecordingFileHooks = async () => {
    const blob = await recordWebcam.getRecording();
    console.log({ blob });
  };


  const stopRecordingAndUpload = async (id) => {
    recordWebcam.stop();
    const blob = await recordWebcam.getRecording();
    console.log({ blob });
    const file = new File([blob], "filename.mp4", {
      type: "video/mp4"
    });
    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", id);
    formData.append("type", "video");
    // const res = await fetch("/api/upload", {
    //   method: "POST",
    //   body: formData
    // });
    // const data = await res.json();
    // console.log(data);
    console.log("Formdata", formData);
  }


  return (
    <div>
      <h1>react-record-webcam</h1>
      <p>Camera status: {recordWebcam.status}</p>
      <div>
        <button
          disabled={
            recordWebcam.status === CAMERA_STATUS.OPEN ||
            recordWebcam.status === CAMERA_STATUS.RECORDING ||
            recordWebcam.status === CAMERA_STATUS.PREVIEW
          }
          onClick={recordWebcam.open}
        >
          Open camera
        </button>
        <button
          disabled={
            recordWebcam.status === CAMERA_STATUS.CLOSED ||
            recordWebcam.status === CAMERA_STATUS.PREVIEW
          }
          onClick={recordWebcam.close}
        >
          Close camera
        </button>
        <button
          disabled={
            recordWebcam.status === CAMERA_STATUS.CLOSED ||
            recordWebcam.status === CAMERA_STATUS.RECORDING ||
            recordWebcam.status === CAMERA_STATUS.PREVIEW
          }
          onClick={recordWebcam.start}
        >
          Start recording
        </button>
        <button
          disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
          onClick={recordWebcam.stop}
        >
          Stop recording
        </button>
        <button
          disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
          onClick={recordWebcam.retake}
        >
          Retake
        </button>
        <button
          disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
          onClick={recordWebcam.download}
        >
          Download
        </button>
        <button
          disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
          onClick={getRecordingFileHooks}
        >
          Get recording
        </button>

        <button
          className="px-3 py-1 bg-red-500 hover:bg-red-700 rounded-lg text-white"
          // disabled={recording.status !== "RECORDING"}
          onClick={() => stopRecordingAndUpload(recordWebcam.id)}
        >
          Upload
        </button>

      </div>

      <video
        ref={recordWebcam.webcamRef}
        style={{
          display: `${recordWebcam.status === CAMERA_STATUS.OPEN ||
            recordWebcam.status === CAMERA_STATUS.RECORDING
            ? "block"
            : "none"
            }`
        }}
        autoPlay
        muted
      />
      <video
        ref={recordWebcam.previewRef}
        style={{
          display: `${recordWebcam.status === CAMERA_STATUS.PREVIEW ? "block" : "none"
            }`
        }}
        controls
      />
    </div>
  );
}
