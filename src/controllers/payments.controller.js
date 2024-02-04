const Booking = require("../models/bookings.models")
const Payment = require("../models/payments.models")
const { bookingStatus, paymentStatus } = require("../utils/constants")
//awrbjfvphncbyljr App password
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
        }
        if(payment.status ===paymentStatus.failed){
            savedBooking.status = bookingStatus.failed;

            await savedBooking.save();
        }

        return res.status(200).send(payment);
    }
    catch(err){

        return res.status(500).send({message:"Internal Server Error"});
    }

    // try{
    // const booking = Booking.findById(bookingId)
    // const obj = {
    //     bookingId,
    //     status,
    //     amount:booking.totalCost
    // }
    // const bookedTime=booking.createdAt
    // const paymentTime = Date.now()
    // const min =Math.floor(((paymentTime-bookedTime)/1000)/60)
    // if(min>3){
    //     booking.status=bookingStatus.expired
    //     await booking.save()
    //     return res.status(401).send({message:"Payment is expired, payment should be made in 3 min"})
    // }
    // const payment = await Payment.create(obj)
    // if(payment.status===paymentStatus.success){
    //     booking.status=bookingStatus.confirmed;
    //     const savedBooking= await booking.save()
    // }
    // else if(payment.status===paymentStatus.failed){
    //     booking.status=bookingStatus.failed
    //     await booking.save()
    // }
    // return res.status(201).send(payment)
    


// }catch(err){
//     return res.status(500).send(err)
// }

}


exports.getPayments=(req,res)=>{
   
}