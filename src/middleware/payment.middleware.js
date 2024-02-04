const Booking = require("../models/bookings.models")

const verifyPayment= async(req,res,next)=>{
    const {bookingId}=req.body
    try{
        const booking = await Booking.findById(bookingId)
        if(!booking){
            return res.status(404).send({message:"Booking not found"})
        }
    }catch(err){
        return res.status(500).send(err.message)
    }

    next()
}
module.exports={
    verifyPayment

}  