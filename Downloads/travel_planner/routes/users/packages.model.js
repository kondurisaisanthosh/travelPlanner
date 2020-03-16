var mongoose = require("mongoose");

module.exports = mongoose.model("packages", {
    packagename: String,
    source:String,
    destination:String,
    flight:String,
    hotel:String,
    price:String,
    date:String,
    days:String,
    email:String
});



