const jwt=require("jsonwebtoken");
const User = require("../models/user.models");
const { userTypes } = require("../utils/constants");
const { SECRET_KEY } = require("../../configs/auth.config");

const verifyToken=(req,res,next)=>{
    const token= req.headers['x-auth-token'];
    if(!token){
        return res.status(401).send({msg:"No Token Provided"})
    }
    jwt.verify(token,SECRET_KEY,async (err,payload)=>{
        if(err){
            return res.status(403).send(err);
        }
        const userId=payload.userId
        const user=await User.findOne({userId:userId})
        req.user=user;
        next();
    })
   
}
const isAdmin=(req,res,next)=>{
    if(req.user.userType===userTypes.CUSTOMER){
        return  res.status(401).send({msg:'Unauthorized'})
    }
    next()
}

module.exports={
    verifyToken,
    isAdmin
}