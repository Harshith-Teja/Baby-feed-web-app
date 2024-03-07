const usersDB = {
    users : require('../model/users.json'),
    setUsers : function(data) { this.users = data}
}

const fsPromsises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if(!user || !pwd) 
        return res.status(400).json({ "message" : "Username and password are required"});
    
    //checking for duplicate usernames in the db
    const duplicate = usersDB.users.find(person => person.username === user);
    if(duplicate)
        return res.status(409).json({ "message" : "Username already exists"});

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);

        //store the new user
        const newUser = { "username" : user, "password" : hashedPwd};
        const updatedUsers = [...usersDB.users, newUser];
        usersDB.setUsers(updatedUsers);
        await fsPromsises.writeFile(
            path.join(__dirname, "..", "model", "users.json"),
            JSON.stringify(usersDB.users)
        )
        console.log(usersDB.users);
        res.status(201).json({"message" : `New user ${user} has been added`});

    }catch(err) {
        res.status(500).json({"message" : err.message})
    }
}

module.exports = { handleNewUser };