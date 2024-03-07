const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

//custom middleware logger
app.use(logger);

//cross origin resource sharing
app.use(cors(corsOptions));

//built-in middleware to handle urlencoded form data
app.use(express.urlencoded({extended: false}));

//built-in middleware for json
app.use(express.json());

//routes
app.use('/register', require('./routes/register'));

app.all('*', (req, res) => {
    res.status(404);
    if(req.accepts('json')) {
        res.json({ "error" : "404 not found"})
    }
    else {
        res.type('txt').send('404 not found');
    }
});

app.use(errorHandler);

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`)});
