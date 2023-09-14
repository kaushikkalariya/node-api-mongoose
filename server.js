const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = require("./app")

const port = process.env.port || 3000;

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );
    
  
    mongoose
    .connect(DB, {
      useNewUrlParser: true,
    })
    .then(() => console.log('DB connection successful!')).catch((err)=>{
    console.log("err",err)
  })
  
 
const server = app.listen(port,()=>{
    console.log(`app runing on port ${port}...`)
})