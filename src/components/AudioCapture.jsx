//importing required modules
import { useReactMediaRecorder } from 'react-media-recorder';
const express = require('express')
const { Config, OpenAIApi } = require('openai') 

/*

//defining variables
const app = express()
app.use(express.json())

//using .env file to hide API key
const config = new Config({
    apiKey: process.env.OPEN_AI_KEY,
})
const openai = new OpenAIApi(config)


** need to test if recording audio works first, then implement AI transcription **
** can i import port call from app-server.js here?? **

*/ 

export default function AudioCapture({
    audioInput,
    textfromAI
}) {
    const { startRecording, stopRecording, mediaBlobUrl, status } = useReactMediaRecorder({ audio: true });

    const handleStart = () => {
        startRecording();
    }

    const handleStop = () => {
        stopRecording();
        audioInput = mediaBlobUrl;
    }



    return (
        <div>
            <button onClick={handleStart}>Start Recording</button>
            <button onClick={handleStop}>Stop Recording</button>
        </div>
    );
}