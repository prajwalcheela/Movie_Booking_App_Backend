const Movie = require("../models/movie.models")
const Theater = require("../models/theater.models")



exports.postTheater= async (req,res)=>{
    try{
        const theater= await Theater(req.body).save()
        return res.status(201).send(theater)
    }
    catch(err){
        return res.status(404).send(err)
    }
}
exports.updateTheater=async (req,res)=>{
    let id= req.params.id;
    // const theater =await Theater.findByIdAndUpdate(id,req.body,{
    //     new:true
    // })
    // console.log(id)
    // if(!theater){
    //     return res.status(404).send({message:"Theater not found"})

    // }
    // return res.status(204).send(theater)
    
    try{
        const theater =await Theater.findByIdAndUpdate(id,req.body,{
            new:true
        })
        
        if(!theater){
            return res.status(404).send({message:"Theater not found"})
            console.log(id)
        }
        return res.status(200).send(theater)
    }catch(err){
        return res.status(400).send(err)
    }
}


exports.getAllTheaters= async (req,res)=>{
    try{
        const responce = await Theater.find().populate("movies")
        return res.status(200).send(responce)
    }catch(err){
        return res.status(400).send(err)
    }
}
exports.getTheaterByID= async (req,res)=>{
    let id = req.params.id;
    try{
        const theater=await Theater.findById(id).populate("movies")
        if(!theater){
            return res.status(404).send({message:"Theater not found"})

        }
        return res.status(200).send(theater)
    }
    catch(err){
        return res.status(200).send(err)
    }
}

exports.addMovieToTheater= async (req,res)=>{
    let {theaterId,movieId}=req.params
    
    
        const [savedTheatre, savedMovie] =  await Promise.all([Theater.findById(theaterId),Movie.findById(movieId)]);
        // console.log(savedMovie)
        if(!savedTheatre){
            return res.status(400).send({message:"Theatre doesn't exisits "});
        }
    
          if(!savedMovie){
            return res.status(400).send({message:"Movie doesn't exisits "});
        }
    
        savedTheatre.movies.push(movieId);
    
        await savedTheatre.save();
    
    
        return res.status(200).send({message:"Movie Added Successfully"});
}
exports.getTheaterWithMovie=async (req,res)=>{
    let {theaterId,movieId}=req.params
    
    
        const [savedTheatre, savedMovie] =  await Promise.all([Theater.findById(theaterId),Movie.findById(movieId)]);
        // console.log(savedMovie)
        if(!savedTheatre){
            return res.status(400).send({message:"Theatre doesn't exisits "});
        }
    
          if(!savedMovie){
            return res.status(400).send({message:"Movie doesn't exisits "});
        }
    const response={
        isRunning:savedTheatre.movies.includes(movieId)
    }
    return res.status(200).send(response);
}