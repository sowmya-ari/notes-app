const models = require('../models/index')

const authorizeUser = async function(email,hashPassword){
    try{
       var user = await models.User.create({
         email: email,
         password: hashPassword
        })
       return user
    }
    catch (error){
      throw Error('database error')
    }
}
const authenticateUser = async function(email,hashPassword){
    try {
        let user = await User.authenticate(username, password)
        user = await user.authorize();
        return res.json(user);
    
    } catch (err) {
        return res.status(400).send('invalid username or password');
    }
}
module.exports = {
    authorizeUser,
    authenticateUser
}