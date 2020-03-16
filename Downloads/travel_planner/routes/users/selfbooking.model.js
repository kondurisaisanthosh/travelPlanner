var mongoose = require("mongoose");

module.exports = mongoose.model("self_booking", {
    source:String,
    destination:String,
    hotel:String,
    flight:String,
    price:String,
    days:String,
    dep_date:String,
    email:String,
});



