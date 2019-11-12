const models = require('../models/index')

const authorizeUser = async function(username,hashPassword){
    try{
       var user = await models.Users.create({
         username: username,
         password: hashPassword
        })
       return user
    }
    catch (error){ 
      throw Error('database error')
    }
}
const authenticateUser = async function(username,password){
    try {
        let user = await models.Users.findOne({
            where:{
                username : username
            }
        })
        if(!user) {
            return "username and also check whether you have authorization to this website"   
        }
        else if(user){
            return "password is incorrect"
        }
        else{
            return "sign in is successfull "  
        }
    } 
    catch (error){
        throw Error('database error')
    } 
}
module.exports = {
    authorizeUser,
    authenticateUser
}