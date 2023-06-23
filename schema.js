const mongoose = require('mongoose')

const fschema = new mongoose.Schema({
    //fid:Number,
    name:String,
    mail:String,
    msg:String,
    //event1:String
}) 

module.exports.event = mongoose.model("event",fschema);

