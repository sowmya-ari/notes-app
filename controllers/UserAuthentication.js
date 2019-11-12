var services = require('../services/UserAuthentication')
const bcrypt = require('bcrypt');

function validateUser(email,password){
    const validEmail = typeof email == 'string' && email != '' && email.trim() != '';
    const validPassword = typeof password == 'string' && password.trim()!='' && password.trim.length>=6 && password != ''
    return validEmail,validPassword
}

const  authorizeUser = async function(req,res){
    const email = req.body.email
    const password = req.body.password
    if(validateUser(email,password)){
        try{
            const hashPassword = bcrypt.hashSync(req.body.password, 10);
            const result = await services.createUser(email,hashPassword)
            return res.status(201).send('user is created')
        }
        catch (error){
            return res.status(500).json(error)
        }
    }
    else{
        return res.status(400).send('email or password is invalid')
    }
}

const authenticateUser = async function(req,res){
    const email = req.body.email
    const password = req.body.password
    if(validateUser(email,password)){
        try{
            const hashPassword = bcrypt.hashSync(req.body.password, 10);
            const result = await services.authenticatingUser(email,hashPassword)
            return res.status(201).send('user is valid')
        }
        catch (error){
            return res.status(500).json(error)
        }
    }
    else{
        return res.status(400).send('email or password is invalid')
    }
}
module.exports = {
    authorizeUser,
    authenticateUser
}