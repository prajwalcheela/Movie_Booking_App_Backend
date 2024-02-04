const { default: mongoose } = require("mongoose");
const { userTypes, userStatus } = require("../utils/constants");



const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type: String,
        required: true,
        minLength:5
    },
    userId:{
        type:String,
        // unique : true,
        required:true,
        minLength:5
    },
    userType:{
        type:String,
        required:true,
        enum:Object.values(userTypes),
        default:userTypes.CUSTOMER
    },
    userStatus:{
        type:String,
        required:true,
        enum:Object.values(userStatus),
        default:userStatus.PENDING
    }
})

const User= mongoose.model("user_MveBookingApp",userSchema)

module.exports=User;