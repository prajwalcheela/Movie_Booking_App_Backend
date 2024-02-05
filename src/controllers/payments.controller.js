const Booking = require("../models/bookings.models");
const Movie = require("../models/movie.models");
const Payment = require("../models/payments.models");
const { PaymentSucess } = require("../scripts/email.scripts");
const { bookingStatus, paymentStatus } = require("../utils/constants");
const { sendEmail } = require("../utils/notification");

exports.createPyment= async (req,res)=>{
    // const{bookingId,status}=req.body
    const {bookingId, status, amount} = req.body;

    const savedBooking = await Booking.findById(bookingId);

     const obj = {
        bookingId,
        status,
        amount:savedBooking.totalCost+50
     }


     const bookedTime=savedBooking.createdAt

    const paymentTime = Date.now()


    const min =Math.floor(((paymentTime-bookedTime)/1000)/60)


    if(min>3){
        savedBooking.status=bookingStatus.expired
        await savedBooking.save()
        return res.status(401).send({message:"Payment is expired, payment should be made in 3 min"})
    }

    try{
        const payment = await Payment.create(obj);

        if(payment.status ===paymentStatus.success){
            savedBooking.status = bookingStatus.confirmed;

            await savedBooking.save();
            const movie = await Movie.findById(savedBooking.movieId)
            const{subject,html,text}=PaymentSucess(req.user,savedBooking,movie)
            sendEmail([req.user.email],subject,html,text)
        }
        if(payment.status ===paymentStatus.failed){
            savedBooking.status = bookingStatus.failed;

            await savedBooking.save();
        }
        

        return res.status(200).send(payment);
    }
    catch(err){

        return res.status(500).send({message:err.message});
    }
}


exports.getPayments=(req,res)=>{
    
   
}