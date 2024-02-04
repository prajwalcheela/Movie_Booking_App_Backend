const validateTheater=(req,res,next)=>{
    const{name,description,city,address,pinCode}=req.body;
    if(!name || !description || !city ||!address||!pinCode) {
        return res.status(400).send({message:"name,description,city,address,pinCode are required fields"})
    }
    next()
}


module.exports={
    validateTheater
}