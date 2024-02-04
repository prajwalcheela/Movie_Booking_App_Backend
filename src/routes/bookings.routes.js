const { createBooking, getAllbookings } = require("../controllers/bookings.controller")
const { verifyToken } = require("../middleware/authJWT.middleware")
const { verifyBooking } = require("../middleware/booking.middleware")

module.exports=(app)=>{
    app.post("/mba/api/bookings",[verifyToken,verifyBooking],createBooking)
    app.get("/mba/api/bookings",[verifyToken],getAllbookings)
}