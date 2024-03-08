const usersDB = {
    users: require('../model/users.json'),
    setUsers: function(data) { this.users = data}
}

const fsPromises = require('fs').promises;
const path = require('path');

const handleLogout = async (req, res) => {
    //on the client-side, also delete the accessToken
    const cookies = req.cookies;
    if(!cookies?.jwt)
        return res.sendStatus(204); //No content

    const refreshToken = cookies.jwt;
    //checking if the user is in the db
    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if(!foundUser) {
        res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
    }

    //deleting the refreshToken in the db
    const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
    const currUser = {...foundUser, refreshToken: ''};
    usersDB.setUsers([...otherUsers, currUser]);

    //overriding the users.json with new data
    await fsPromises.writeFile(
        path.join(__dirname, '..', 'model', 'users.json'),
        JSON.stringify(usersDB.users)
    );

    res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
    res.sendStatus(204);
}

module.exports = { handleLogout };