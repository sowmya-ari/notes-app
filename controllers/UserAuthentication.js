var services = require('../services/UserAuthentication')
const bcrypt = require('bcrypt');

const authorizeUser = async function(req,res){
    const username = req.body.username
    const password = req.body.password
    if (!username || !password) {
        res.status(400).send({msg: 'Please pass username and password.'})
    }
    else {
        try{
            const hashPassword = bcrypt.hashSync(password,10);
            const result = await services.authorizeUser(username,hashPassword)
            return res.status(201).send(result)
        }
        catch (error){
            return res.status(500).send("user already exists ")
        }
    }
}

const authenticateUser = async function(req,res){
    const username = req.body.username
    const password = req.body.password
    if(!username || !password){
        return res.status(400).send('email or password is invalid')
    }
    else{
        try{
            const result = await services.authenticateUser(username,password)
            console.log(result)
            return res.status(201).send(result)
        }
        catch (error){
            return res.status(500).send(error)
        }
    }
}
module.exports = {
    authorizeUser,
    authenticateUser
}