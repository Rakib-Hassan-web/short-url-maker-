const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');


const shortnerSchema = new mongoose.Schema({
    longUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    }
},{timestamps:true})

module.exports =mongoose.model("shortner" ,shortnerSchema)