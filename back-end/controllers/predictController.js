const { spawn } = require('child_process');
const path = require('path');

const predictDisease = (req, res) => {
    const { symptom1, symptom2, symptom3, symptom4, symptom5 } = req.body;
    let predictionVal = '';
    console.log(symptom1, symptom2, symptom3, symptom4, symptom5);
    const python = spawn("python", [path.join(__dirname, '..', 'diseasePrediction', 'disease_prediction.py'), symptom1, symptom2, symptom3, symptom4, symptom5]);
    console.log('here');
    python.stdout.on("data", (data) => {
        console.log("python data: ", data.toString());
        predictionVal = data.toString();
        //res.status(201).json({predictionVal})
    });

    python.stderr.on('data', (data) => {
        console.error('python error:', data.toString());
    });

    python.on('close', (code) => {
        console.log('python process exited with code:', code);
    });
}

module.exports = {predictDisease}