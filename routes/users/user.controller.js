var Users = require("./user.model")


module.exports.createUser = function (req, res) {
    var user = new (req.body);
    user.save(function (err, result) {
        res.json(result);
    })
}

module.exports.updateUser = function (id, callback) {
    Users.findOne({ email: id }, function (err, result) {
        var myquery = result;
        var newvalues = { travelAgent: true };
        Users.updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            
        });


    });

}

module.exports.deleteUser = function (req, res) {
    console.log("req inside deleteuser");
    Users.remove({ _id: req.params._id }, function (err, removed) {
        console.log("removed from serverdb");
        res.send("removed");
    });

}

module.exports.getUsers = function (req, res) {
    Users.find({}, function (err, result) {
        res.json(result);
    });
}