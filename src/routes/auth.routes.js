const { signUp, signIn } = require("../controllers/auth.controller")
const { verifySighUp, verifySignIn } = require("../middleware/auth.middleware")




module.exports=(app)=>{
    app.post("/mba/api/auth/signup",[verifySighUp],signUp)
    app.post("/mba/api/auth/signin",[verifySignIn],signIn)
}