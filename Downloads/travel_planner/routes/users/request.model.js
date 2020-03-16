var mongoose = require("mongoose");

module.exports=mongoose.model("request",{
    name: String,
    email:String,
    googleId: String,
    approved:Boolean,
});