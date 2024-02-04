const { postMovies, getAllMovies, getMovieById, updateMovie, deleteMovie } = require("../controllers/movies.controller");
const { verifyToken, isAdmin } = require("../middleware/authJWT.middleware");
const { MveVerify } = require("../middleware/movie.middleware");




module.exports=(app)=>{
    app.post("/mba/api/movies",[verifyToken,isAdmin,MveVerify],postMovies)
    app.put("/mba/api/movies/:id",[verifyToken,isAdmin],updateMovie)
    app.delete("/mba/api/movies/:id",[verifyToken,isAdmin],deleteMovie)
    app.get("/mba/api/movies",getAllMovies)
    app.get("/mba/api/movies/:id",[verifyToken],getMovieById);
}