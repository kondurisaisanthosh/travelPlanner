var mongoose=require("mongoose")

module.exports=mongoose.model("holidays",{
    Holidayname:String,
    startdate:String,
    enddate:String,
})