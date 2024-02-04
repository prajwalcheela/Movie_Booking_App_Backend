const { createPyment } = require("../controllers/payments.controller")
const { verifyToken } = require("../middleware/authJWT.middleware")
const { verifyPayment } = require("../middleware/payment.middleware")

module.exports=(app)=>{
    app.post("/mba/api/payments",[verifyToken,verifyPayment],createPyment)
    app.get("/mba/api/payment",[verifyToken])
}