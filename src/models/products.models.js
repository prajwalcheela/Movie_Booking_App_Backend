const mongoose = require("mongoose")

const productSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type :Number ,
        required: true
    },
    // category:{
    //     type:String,
    //     required:true,
    //     enum:["Electronics","Fashion","Jewellery"]
    // }
    
})

const product = mongoose.model("MveBookingApp",productSchema)

module.exports=  product;