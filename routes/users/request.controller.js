var Rdata = require("./request.model");

module.exports.insertData = function(req) {

    var rdata = new Rdata(req);
    rdata.save(function(err) {
        if(err)
        {
            throw err;
        }
    })
    console.log('data inserted successfully')
}

module.exports.deleteData = function(id, callback) {
console.log(id);
Rdata.deleteOne({'_id':id},function(err,data){
    
});
}

module.exports.getData = function(req,res) {
    Rdata.find({},function (err, data){
        if(err)
        {
            res.status(404).send('Not found');
        }
        res.json(data);
   });
}