const createError = require('http-errors');
const mongoose = require("mongoose")
const asyncHandler = require("express-async-handler");
const Product = require("./../models/productModel");

module.exports = {
    getAllProduct : asyncHandler(async(req,res,next)=>{
        const result = await Product.find({},{ __v: 0 })
        res.send(result);
    }),
    createNewProduct:asyncHandler(async (req,res,next)=>{
        
        const product = new Product(req.body);
        const result = await product.save()
        res.send(result)
    }),
    findProductById: asyncHandler(async(req,res,next)=>{
        console.log("req.params",req.params)
            const id= req.params.id;
            const product=await Product.findById(id)

            if(!product){
                throw createError(404,'product does not exist')
            }
        
            res.send(product)
    }),
    updateProduct:asyncHandler(async(req,res,next)=>{
        try{
            const id = req.params.id;
            const update = req.body;
            const option = {
                new:true
            }
            console.log("id",id)
            const result = await Product.findByIdAndUpdate(id,update,option)

            if(!result){
                throw createError(404,'product does not exist')
            }
            res.send(result);
        }catch(error){
            if (error instanceof mongoose.CastError) {
                return next(createError(400, 'Invalid Product Id'));
              }
              next(error)
        }
    }),
    deleteProduct:asyncHandler(async(req,res,next)=>{
        const id = req.params.id;
       
        const result = await Product.findByIdAndDelete(id)
        if(!result){
            throw createError(404,'product does not exist')
        }
        res.send(result)
    })
}
