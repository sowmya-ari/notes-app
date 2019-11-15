const models = require('../models/index')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
require('dotenv').config();

const authorizeUser = function(req,res){
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).send(errors);
    }
    models.Users.findOne({where:{username: req.body.username} }).then(user => {
        if (user) {
          return res.status(400).send({ username: "username already exists" })
        }
        else {
            const username = req.body.username
            const password = req.body.password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                  if (err) throw err;
                  var hashPassword = hash;
                  models.Users.create({
                    username: username,
                    password: hashPassword
                   }).then(user => res.json(user))
                    .catch(err => console.log(err));
                });
            });
         } 
    }) 
}

const authenticateUser = function(req,res){
    const { errors, isValid } = validateLoginInput(req.body);
    const username = req.body.username
    const password = req.body.password
    if (!isValid) {
        return res.status(400).json(errors);
    }
    models.Users.findOne({  where:{
        username : username
    }})
    .then(user => {
     if (!user) {
      return res.status(404).json({ usernotfound: "User not found" });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          username: user.username
        };
        jwt.sign(payload,process.env.secretOrKey,
          {
            expiresIn: 604800
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
}
module.exports = {
    authorizeUser,
    authenticateUser
}