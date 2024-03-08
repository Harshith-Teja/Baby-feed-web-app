const usersDB = {
    users : require('../model/users.json'),
    setUsers : function(data) { this.users = data}
}

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd) 
        return res.status(400).json({"message" : "Username and password are required"});

    //checking if that user actually exists in the DB
    const foundUser = usersDB.users.find(person => person.username === user);
    if(!foundUser)
        return res.sendStatus(401); //if user doesn't exist, then send 404(Unauthorized)

    //evaluate password
    try {
        const match = await bcrypt.compare(pwd, foundUser.password);
        
        if(match) {
            //creating JWTs
            const accessToken = jwt.sign(
                {"username" : foundUser.username},
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s'} //normally can keep it to 5-15min
            );

            const refreshToken = jwt.sign(
                {"username" : foundUser.username},
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '1d'}
            );

            //saving the refresh token(with the curr user) to the db
            const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
            const currUser = {...foundUser, refreshToken};
            usersDB.setUsers([...otherUsers, currUser]);

            //writing the changes to the users.json file
            await fsPromises.writeFile(
                path.join(__dirname, '..', 'model', 'users.json'),
                JSON.stringify(usersDB.users)
            );
            
            //sending aT & rT to the client(browser)
            res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000}); //httpOnly is set to true(i.e, it is not sent in js and it can't be hacked and accessed)
            res.json({ accessToken });
        } else {
            res.sendStatus(401);
        }
    }catch(err) {
        res.status(500).json({"message" : err.message});
    }
}

module.exports = { handleLogin };