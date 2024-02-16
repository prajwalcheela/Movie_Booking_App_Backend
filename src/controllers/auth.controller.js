const { SECRET_KEY } = require("../../configs/auth.config");
const User = require("../models/user.models");
const { userTypes,userStatus } = require("../utils/constants")

const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken")

 
exports.signUp= async (req,res)=>{
    const {name,email,password,userId,userType}=req.body

    const status= (userType===userTypes.CUSTOMER)?userStatus.APPROVED:userStatus.PENDING;

    const hashedPassword= bcrypt.hashSync(password,10)
    const details={
        name,
        email,
        password:hashedPassword,
        userId,
        userType,
        userStatus:status
    }

    try{
        const user = await User.create(details)
        console.log(user)
        return res.status(201).send(user)
    }
    catch(err){
        return res.status(400).send(err)
    }
}


exports.signIn= async(req,res)=>{
    const {userId,password}=req.body
    const user =await  User.findOne({userId:userId})

    if(!user){
       return res.status(400).send({message:"Invalid userId provided"})
    }

    var IspassMatch = bcrypt.compareSync(password,user.password)
    if (!IspassMatch) {
        res.status(400).send({message:"Invalid password"})
    }

    var token = jwt.sign({userId:user.userId},SECRET_KEY,{expiresIn:"1hr"})
    // var token = jwt.sign({userId:user.userId},'mymecretlw',{expiresIn:'1h'});
    // console.log(token)
    return res.status(201).send({
        name:user.name,
        userId:user.userId,
        email:user.email,
        userType:user.userType,
        accessToken:token
    })

    
}