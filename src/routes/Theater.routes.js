const { postTheater, getAllTheaters, getTheaterByID,  addMovieToTheater, getTheaterWithMovie, updateTheater } = require("../controllers/theater.controller")
const { verifyToken, isAdmin } = require("../middleware/authJWT.middleware")
const { validateTheater } = require("../middleware/theater.middleware")



module.exports=(app)=>{
    app.post("/mba/api/theaters",[verifyToken,isAdmin,validateTheater],postTheater)
    app.put("/mba/api/theaters/:id",[verifyToken,isAdmin],updateTheater)
    app.get("/mba/api/theaters",getAllTheaters)
    app.get("/mba/api/theaters/:id",[verifyToken],getTheaterByID)
    app.put("/mba/api/theaters/:theaterId/movies/:movieId",[verifyToken,isAdmin],addMovieToTheater)
    app.get("/mba/api/theaters/:theaterId/movies/:movieId",getTheaterWithMovie)
}