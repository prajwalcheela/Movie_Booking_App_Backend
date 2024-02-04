const Booking = require("../models/bookings.models")
const Movie = require("../models/movie.models")
const Theater = require("../models/theater.models")

exports.createBooking=async (req,res)=>{
    const{movieId,theaterId,timings,noOfSeats}=req.body
    const bookingObj={
        userId: req.user._id,
        theaterId,
        movieId,
        timings,
        noOfSeats,
        totalCost:noOfSeats*250
    }
    try{
        // const [theater,movie]=await Promise.all([Theater.findById(theaterId),Movie.findById(movieId)])
        // if(!theater){
        //     return res.status(400).send({message:"theater not found"})
        // }
        // if(!movie){
        //     return res.status(400).send({message:'Movie Not Found'})
        // }
        const booking = await Booking.create(bookingObj)
        // console.log(booking)
        return res.status(201).send(booking)
    }catch(err){
        return res.status(500).send(err)
    }
}
exports.getAllbookings=async(req,res)=>{
    try{
        const bookings= await Booking.find().populate("userId").populate("movieId").populate("theaterId")

        return res.status(200).send(bookings)
    }catch(err){
        return res.status(500).send(err)
    }
}