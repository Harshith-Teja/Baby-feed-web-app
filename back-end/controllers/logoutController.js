const User = require('../model/User');

const handleLogout = async (req, res) => {
    //on the client-side, also delete the accessToken

    const cookies = req.cookies;
    if(!cookies?.jwt)
        return res.sendStatus(204); //No content

    const refreshToken = cookies.jwt;
    //checking if the user is in the db
    const foundUser = await User.findOne({refreshToken}).exec();
    if(!foundUser) {
        res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
    }

    //deleting the refreshToken in the db
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);

    res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
    res.sendStatus(204);
}

module.exports = { handleLogout };