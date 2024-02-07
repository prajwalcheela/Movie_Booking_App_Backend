const User = require("../models/user.models");

exports.verifySighUp=(req,res,next)=>{
    const {name,email,password,userId,usertype}=req.body;
    if(!name){
        return res.status(400).send({message:"Name is required"})
    }
    else if (!email) {
        return  res.status(400).send({ message: "Email is invalid"})
    }
    if(!password){
        return res.status(400).send({message:"Password is required"})
    }
    if(!userId){
        return res.status(400).send({message:"userId is reqquired"})
    }
    const user=User.find({
        $or:[
            {userId:userId},
            {email:email}
        ]})
        if(user){
            return res.status(400).send({message:"UserId or email already exists"})
        }
        next()
}

exports.verifySignIn=(req,res,next)=>{
    const{userId, password}=req.body;
    if(!userId || !password ) {
        return res.status(400).json({ message: "Email and Password are required"})
    }
    next()  
}