var Bdata = require("./booking.model");

module.exports.insertData = function(req) {
    var bdata = new Bdata(req);
    bdata.save(function(err) {
        if(err)
        {
            throw err;
        }
    })
    console.log('data inserted successfully')
}

module.exports.deleteData = function(id, callback) {
    console.log(id);
    Bdata.deleteOne({'_id':id},function(err,data){
        
    });
    }

module.exports.getData = function(req,res) {
    Bdata.find({},function (err, data){
        if(err)
        {
            res.status(404).send('Not found');
        }
        res.json(data);
   });
}
