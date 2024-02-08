import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

function App() {
    const waveformRef = useRef(null);
    let wavesurfer = null;

    useEffect(() => {
        wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: '#4F4A85',
            progressColor: '#383351'
        });

        wavesurfer.load('./audios/freddy.mp3');

        return () => {
            wavesurfer.destroy();
        };
    }, []);

    async function exportWaveformImage() {
        try {
            const imageData = await wavesurfer.exportImage("image/png");

            console.log(imageData)

            fetch("/test", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(imageData[0]),
            })
            .then((response)=>response.json())
            .then(data=>console.log(data))
        } catch (error) {
            console.error("Feiler",error);
        }
    }

    return (
        <div className="App">
            <h1>Audio Player</h1>
            <button onClick={exportWaveformImage}>Export Waveform Image</button>
            <div ref={waveformRef} />
        </div>
    );
}

export default App;
