const product = require("../models/products.models");

const mongoose=require("mongoose")

exports.createProdct=async (req,res)=>{
    const {price,name,description}  = req.body;
    // console.log(price)

    if(!price || price<0){
        return res.status(400).send({message:"Price cannot be NULL or Negative in nature"});
    }

    if(!name){
        return res.status(400).send({message:"Name of the product cannot be empty"});
    }

    const productData = {
        price,
        name,
        description,
        // category
    }
    // console.log(productData)

    
    try{
        const responce = await product.create(productData)    
        return res.status(201).send(responce)
    }
    catch(err){
        return res.status(400).send({message:`error in nework ${err}`})
    }
}
exports.getAllProducts= async (req,res)=>{
   try{
    const products =await product.find();
    return res.status(200).send(products)
   }catch(err){
    return res.status(500).send({message:`catch ${err}`})
   }
}
exports.getProductById=async (req,res)=>{
    const id=req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message:"id is not valid"})
    }
    try{
        const productdata=await product.findById(id)
        if(!productdata){
            return res.status(404).send({message: "No Product Found with given ID!"})
        }
        return res.status(200).send(productdata)
    }
    catch(err){
        return res.status(500).send({message:`Error ${err}`})
    }
}

exports.updateProduct = async (req,res)=>{
    const id = req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message:"Invalid ID"})
    }
    const updatedVal=req.body
    console.log(updatedVal)
    try{
        const response = await product.findByIdAndUpdate(id,updatedVal,{
            new : true
        })
        // console.log(response)
        if(!response){
            return res.status(404).send({message:"No data found for the given Id."})
        }
        return res.status(200).send(response)
    }
    catch(err){
        return res.status(500).send({message:"Updation failed"})
    }
}

exports.deleteProduct=async (req,res)=>{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message:"Invalid ID passed"})
    }
    try{
        let removeData = await product.findByIdAndDelete(id);
        if (!removeData) {
            return res.status(404).send({message:"ID not found"})
        }
        return res.status(200).send({message:`${removeData.name} deleted sucessfully`})
    }
    catch(err){
        return res.status(500).send({message:`Error : ${err}`})
    }
}