const User = require('../model/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd) 
        return res.status(400).json({"message" : "Username and password are required"});

    //checking if that user actually exists in the DB
    const foundUser = await User.findOne({username: user}).exec();
    if(!foundUser)
        return res.sendStatus(401); //if user doesn't exist, then send 401(Unauthorized)

    //evaluate password
    try {
        const match = await bcrypt.compare(pwd, foundUser.password);
        
        if(match) {
            //creating JWTs
            const accessToken = jwt.sign(
                {"username" : foundUser.username},
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15m'} //normally can keep it to 5-15min
            );

            const refreshToken = jwt.sign(
                {"username" : foundUser.username},
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '7d'}
            );

            //saving the refresh token(with the curr user) to the db
            foundUser.refreshToken = refreshToken;
            const result = await foundUser.save();
            console.log(result);
            
            //sending aT & rT to the client(browser)
            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None',  maxAge: 24 * 60 * 60 * 1000}); //httpOnly is set to true(i.e, it is not sent in js and it can't be hacked and accessed)
            res.json({ accessToken });
        } else {
            res.sendStatus(401);
        }
    }catch(err) {
        res.status(500).json({"message" : err.message});
    }
}

module.exports = { handleLogin };