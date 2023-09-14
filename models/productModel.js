const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

var product = mongoose.model('product',productSchema);

module.exports = product;