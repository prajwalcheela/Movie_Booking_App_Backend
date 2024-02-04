const { default: mongoose } = require("mongoose");

const theaterSchemal=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,

    },
    pinCode:{
        type:Number,
        required:true
    },
    movies:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref:"movie_MveBookingApp"
    }
})

const Theater = mongoose.model("Theater_MveBookingApp",theaterSchemal)

module.exports=Theater