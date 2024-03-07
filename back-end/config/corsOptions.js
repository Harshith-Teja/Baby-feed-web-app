const allowedOrigins = [
    'https://yoursite.com',
    'http://127.0.0.1/5171',
    'http://localhost:3500'
]

const corsOptions = {
    origin: (origin, callBack) => {
        if(allowedOrigins.includes(origin) !== -1 || !origin) {
            callBack(null, true);
        }
        else {
            callBack(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;