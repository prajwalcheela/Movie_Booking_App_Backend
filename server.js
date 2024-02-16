const express=require("express")
const bodyParser=require("body-parser")
const mongoose =  require("mongoose")
require("dotenv").config()
const cors = require("cors")
const productRoute = require("./src/routes/products.routes")
const authRoute=require("./src/routes/auth.routes")
const movieRoute = require("./src/routes/movies.routes");
const TheaterRoute = require("./src/routes/Theater.routes")
const bookingRoute=require("./src/routes/bookings.routes")
const paymentRoute = require("./src/routes/payments.routes")
const { DB_URL } = require("./configs/db.config");
const { PORT } = require("./configs/server.config")


mongoose.connect(DB_URL)
.then(()=>{
    console.log("Successfully connected to the database");
})
.catch((err)=>{
    console.log("Couldn't connect to the databse",err.message);
})


console.log("hello")
// var {productData} =require("./data")
const app=express()
app.use(bodyParser.json())
app.use(cors())
productRoute(app)
authRoute(app)
movieRoute(app)
TheaterRoute(app)
bookingRoute(app)
paymentRoute(app)

app.listen(PORT,()=>{
   console.log("Server started in port",PORT)
})