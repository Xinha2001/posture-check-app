import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import * as tf from '@tensorflow/tfjs';
import { createDetector, SupportedModels } from '@tensorflow-models/face-landmarks-detection';

function WebcamCapture() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function setupCamera() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        detectFaces();
      }
    }

    async function detectFaces() {
      const model = SupportedModels.MediaPipeFaceMesh;
      const detectorConfig = {
        runtime: 'mediapipe', // or 'tfjs'
        solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
      };
      const detector = await createDetector(model, detectorConfig);

      const video = videoRef.current;
      video.width = video.videoWidth;
      video.height = video.videoHeight;

      let faceDetected = false; // Flag to track if face is detected

      async function onFrame() {
        if (video.readyState === 4) {
          // Video is ready
          const faces = await detector.estimateFaces(video, false);
          if (faces.length > 0 && !faceDetected) {
            // Navigate to the home page if a face is detected and not already detected
            faceDetected = true;
            console.log("Face captured successfully!");
            setTimeout(() => {
              navigate('/home');
            }, 4000); // 4 seconds delay
          }
        }
        requestAnimationFrame(onFrame);
      }
      onFrame();
    }

    setupCamera();
  }, [navigate]);

  return <video ref={videoRef} style={{ transform: 'scale(-1, 1)' }} />;
}

export default WebcamCapture;
