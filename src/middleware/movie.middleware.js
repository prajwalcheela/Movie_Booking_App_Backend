exports.MveVerify=(req,res,next)=>{
    const {name,description,casts,trailUrl,posterUrl,language,director}=req.body
    if(!name||!description||!casts||!trailUrl||!posterUrl||!language||!director){
        return res.status(400).json({message:"name,description,casts,trailUrl,posterUrl,language,director are required fields"})

    }
    next()
}