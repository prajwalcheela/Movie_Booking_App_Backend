// const Movie = require("../models/movie.models")
const Theater = require("../models/theater.models");
const Movie=require("../models/movie.models")

const verifyBooking=async (req,res,next)=>{
    const{movieId,theaterId,timings,noOfSeats}=req.body
    try{
        const [theater,movie]=await Promise.all([Theater.findById(theaterId),Movie.findById(movieId)])
        if(!theater){
            return res.status(400).send({message:"theater not found"})
        }
        if(!movie){
            return res.status(400).send({message:'Movie Not Found'})
        }
        if(!timings || !noOfSeats){
            return res.status(404).send({message:"Timings and No of seats are required"})
        }
    }catch(err){
        return res.status(400).send(err)
    }
    next()
}

module.exports={
    verifyBooking
}