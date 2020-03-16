var mongoose = require("mongoose");

module.exports = mongoose.model("package_users", {
    packageInfo:{},
    packageid:String,
    user_email:String,
    user_name:String,
});



