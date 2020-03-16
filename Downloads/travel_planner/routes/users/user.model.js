var mongoose = require("mongoose");

module.exports = mongoose.model("users", {
    name: String,
    email:String,
    googleId: String,
    role:String,
    travelAgent:Boolean,
    authData:{}

});



