const Movie = require("../models/movie.models")
const Theater = require("../models/theater.models")

exports.postMovies= async (req,res)=>{
    const moviedetails=new Movie(req.body)

    try{
        const movie =await  Movie.create(moviedetails)
        return res.status(201).send(movie)
    }
    catch(err){
        return res.status(400).send(err)
    }
}

exports.updateMovie= async(req,res)=>{
    let id= req.params.id;
    // const theater=await Theater.findByIdAndUpdate(id,req.body,{
    //     new:true
    // })
    // if(!theater) {
    //     return res.ststus(404).send({message:"Movie not found"})
    // }
    // return res.status(200).send(theater)
    try{
        const movie=await Movie.findByIdAndUpdate(id,req.body,{
            new:true
        })
        if(!movie) {
            return res.status(404).send({message:"Movie not found"})
        }
        return res.status(200).send(movie)
    }catch(err){
        return res.status(400).send(err)
    }
}

exports.deleteMovie=async(req,res)=>{
    let id=req.params.id
    try{
        const movie = await Movie.findByIdAndDelete(id);
        if (!movie) {
            return res.status(400).send({message:"movie not found"})
        }
        return res.status(202).send({message:"deleted sucessfully"})
    }catch(err){
        return res.status(500).send(err)
    }
}



exports.getAllMovies= async (rez,res)=>{
    try{
        let movies = await Movie.find()
        if(!movies){
            return res.status(404).send({message:"No movies found"})
        }
        return res.status(200).send(movies)
        
    }
    catch(err){
        return res.status(400).send(err)
    }
}
exports.getMovieById = async (req,res)=>{

    const id = req.params.id;

    try{
    const movie = await Movie.findById(id);


    if(!movie){
        return res.status(404).send({message:"Movie Not Found"});
    }
    

   return res.status(201).send(movie);

}
catch(err){
        return res.status(500).send({message:err.message});
}    
}