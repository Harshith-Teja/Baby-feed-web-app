const { spawn } = require('child_process');
const path = require('path');

const predictDisease = (req, res) => {
    const { symptom1, symptom2, symptom3, symptom4, symptom5 } = req.body;
    let predictionVal = '';
    const python = spawn("python", ['disease_prediction.py', symptom1, symptom2, symptom3, symptom4, symptom5]);
    python.stdout.on("data", (data) => {
        console.log("Disease: ", data.toString());
        predictionVal = data.toString();
        res.status(201).json({predictionVal})
    });

    /*python.stderr.on('data', (data) => {
        console.error('python error:', data.toString());
    });

    python.on('close', (code) => {
        console.log('python process exited with code:', code);
    });*/
}

module.exports = {predictDisease}

/*let predictionVal = "0";
const { spawn } = require("child_process");
const path = require('path');
// process.stdin.setEncoding('utf8');

const python = spawn("python", ['disease_prediction.py', "dischromic_patches","itching","skin_peeling","skin_rash","nodal_skin_eruptions"]);
python.stdout.on("data", (data) => {
console.log("Disease name : ", data.toString());
predictionVal = data.toString();
});*/