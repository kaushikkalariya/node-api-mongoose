const express = require("express")
const createError = require('http-errors');
const productRoute= require('./routes/productRoute')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router
app.use('/api/v1/products',productRoute);

//404 handler and pass to error handler
app.use((req,res,next)=>{
    next(createError(404),'not found')

})

//error handler 
app.use((err,req,res,next)=>{
    res.status(err.status || 500);

    res.send({
        error:{
            status:err.status || 500,
            message:err.message
        }
    })
})
module.exports = app;