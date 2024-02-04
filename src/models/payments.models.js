const { default: mongoose } = require("mongoose");
const { paymentStatus } = require("../utils/constants");

const paymentSchema={
    bookingId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"bookings_MveBookingApp",
        required:true

    },
    amount:{
        type:Number,
        // required:true
    },
    status:{
        type:String,
        enum:Object.values(paymentStatus),
        default:paymentStatus.pending
    },
    createdAt:{
        type:Date,
        required:true,
        default:()=>{
            return Date.now()
        }
    }

}
const Payment=mongoose.model("payments_MveBookingApp",paymentSchema)

module.exports=Payment;