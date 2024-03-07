const usersDB = {
    users : require('../model/users.json'),
    setUsers : function(data) { this.users = data}
}

const bcrypt = require('bcrypt');

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
            //create JWTs
            res.json({"success": `User ${user} is logged in!`});
        } else {
            res.sendStatus(401);
        }
    }catch(err) {
        res.status(500).json({"message" : err.message});
    }
}

module.exports = { handleLogin };