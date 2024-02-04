const { default: mongoose } = require("mongoose");
const { bookingStatus } = require("../utils/constants");

const bookingSchema=mongoose.Schema({
    userId:{
        type : mongoose.SchemaTypes.ObjectId, 
        ref:"user_MveBookingApp",
        required:true
    },
    movieId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"movie_MveBookingApp",
        required:true
    },
    theaterId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Theater_MveBookingApp",
        required:true
    },
    timings:{
        type:String,
        required:true,

    },
    status:{
        type:String,
        required:true,
        enum:Object.values(bookingStatus),
        default:bookingStatus.inprogress
    },
    noOfSeats:{
        type:Number
    },
    totalCost:{
        type:Number
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>{
            return Date.now()
        }
    }

})
const Booking = mongoose.model("bookings_MveBookingApp",bookingSchema)
module.exports=Booking;