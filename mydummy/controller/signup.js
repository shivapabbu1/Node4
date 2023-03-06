const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const CONSTANTS = require('../config/key');

const usersignup = function(req,res){
    console.log("Registering the user");
   
    console.log("Recieved user details =>",  req.body.password,
         "name =>" , req.body.name,"email =>" , req.body.email);
   
    const roundsOfSalt = 10;
    bcrypt.genSalt(roundsOfSalt, function(err, salt){
        if(err){
            console.log(err);
        }
        else{
            bcrypt.hash(req.body.password, salt, function(err,hashedPassword){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("User has registered successfully ")
                    res.send({"hashedPassword":hashedPassword})
                    
                }
            })
        }
    })
};

module.exports = {usersignup};