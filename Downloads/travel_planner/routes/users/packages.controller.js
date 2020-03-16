var Pdata = require("./packages.model");

module.exports.insertData = function(req) {
    var pdata = new Pdata(req);
    pdata.save(function(err) {
        if(err)
        {
            throw err;
        }
    })
    console.log('data inserted successfully')
}

module.exports.deleteData = function(id, callback) {
    console.log(id);
    Pdata.deleteOne({'_id':id},function(err,data){
        
    });
    }

module.exports.getData = function(req,res) {
    Pdata.find({},function (err, data){
        if(err)
        {
            res.status(404).send('Not found');
        }
        res.json(data);
   });
}
