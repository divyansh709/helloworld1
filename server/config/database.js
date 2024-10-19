const mongoose = require ("mongoose");
require("dotenv").config();

const MONGODB_URL= 
exports.connect =() =>{
    mongoose.connect('mongodb://localhost:27017',{
})
 .then(() => console.log("DB connected Successfully"))
 .catch((error)=>{
    console.log("DB connection failed");
    console.error(error);
    process.exit(1);
 } )
};

