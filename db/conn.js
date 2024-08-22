const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const client=async()=>{
  try{
      await mongoose.connect(process.env.DATABASE_URI);
  }catch(err){
      console.log(err);
  }
}

module.exports = client;