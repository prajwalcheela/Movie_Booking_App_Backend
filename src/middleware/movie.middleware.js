exports.MveVerify=(req,res,next)=>{
    const {name,description,casts,trailerUrl,posterUrl,language,director}=req.body
    // console.log(name)
    // console.log(director)
    // console.log(description)
    // console.log(casts)
    // console.log(trailerUrl)
    // console.log(posterUrl)
    // console.log(language)
    if(!name||!description||!casts||!trailerUrl||!posterUrl||!language||!director){
       
        return res.status(400).json({message:"name,description,casts,trailUrl,posterUrl,language,director are required fields"})

    }
    next()
}