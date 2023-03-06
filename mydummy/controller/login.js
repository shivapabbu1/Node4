const jwt = require('jsonwebtoken');
const keyroom = require('../config/key');

const userLogin = function(req,res){
    console.log("User logging in");
   
    if(req.body.password){
        console.log("Recieved password =>", req.body.password,  "email=>",req.body.email);
        // res.send(req.body.password)
        const jwtToken = jwt.sign(req.body.password, keyroom.SECRET_KEY);
        return res.status(200).send({"token": jwtToken});
    }
    
    else{
        return res.status(400).send({message:"Invalid credentials"});
    }
};

module.exports = {userLogin};