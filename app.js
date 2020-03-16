var express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser');
var path = require('path');
var bodyParserJson = require('body-parser').json();
var request = require('request');
var session = require('express-session');
const passport = require('passport');
const passportSetup = require('./routes/config/passport');
const mongoose = require('mongoose');
const keys = require('./routes/config/auth');
const Rdata = require('./routes/users/request.model');
const RdataController = require('./routes/users/request.controller');
const UdataController = require('./routes/users/user.controller');
const Pdata = require('./routes/users/packages.model');
const PdataController = require('./routes/users/packages.controller');
const Bdata = require('./routes/users/booking.model');
const BdataController = require('./routes/users/booking.controller');
const SBdata = require('./routes/users/selfbooking.model');
const SBdataController = require('./routes/users/selfbooking.controller');
const Hdata = require('./routes/users/holiday.model');
const HdataController = require('./routes/users/holiday.controller');


var port = 4000;
var app = express();
app.use(express.static(path.join(__dirname, '/client/dist/client')));

app.use(passport.initialize());
app.use(passport.session());


app.use(session({
  secret: 'somerandonstuffs',
  resave: true,
  saveUninitialized: true
}));

var userModelController = require(__dirname + "/routes/users/user.controller");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://saisantosh:saisantosh@travelplanner-mkq4q.mongodb.net/travel_planner?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/saveuser', userModelController.createUser);
app.get('/api/getUsers', userModelController.getUsers);



///Get User Info at Any place
app.get('/api/me', function (req, res) {
  var user = req.session.user;
  if (user) {
    res.json(user);

  } else {
    res.redirect('/');
  }
})

app.get('/api/data', RdataController.getData);
app.post("/api/admin/decline", (req, res, next) => {
  var id = req.body.params.searchKey;
  RdataController.deleteData(id);
})


app.post("/api/admin/approval", (req, res, next) => {
  var email = req.body.params.searchKey;
  var id = req.body.params.searchid;
  console.log('approve')
  console.log(email);
  console.log(id);
  UdataController.updateUser(email);
  RdataController.deleteData(id);
})
app.post("/api/travelagent/create", (req, res, next) => {
  console.log('in create package');
  console.log(req.body);
  var newpdata = new Pdata({
    packagename: req.body.dpackage.packageName,
    source:req.body.dpackage.source,
    destination: req.body.dpackage.destination,
    flight: req.body.dpackage.flight,
    hotel: req.body.dpackage.hotel,
    price:req.body.dpackage.price,
    date: req.body.dpackage.date,
    days: req.body.dpackage.days,
    email: req.body.dpackage.email,
  })
  PdataController.insertData(newpdata);
})



app.post("/api/user/selfbooking", (req, res, next) => {
  console.log('in self booking');
  console.log(req.body);
  SBdata.findOne({ 'email': req.body.ownbooking.email, 'destination': req.body.ownbooking.destination, 'dep_date': req.body.ownbooking.date }, function (err, data) {
    if (data) {
      console.log('data already inserted');

    } else {
      var newsbdata = new SBdata({
        source: req.body.ownbooking.source,
        destination: req.body.ownbooking.destination,
        hotel: req.body.ownbooking.hotel,
        flight: req.body.ownbooking.flight,
        price: req.body.ownbooking.price,
        days: req.body.ownbooking.days,
        dep_date: req.body.ownbooking.date,
        email: req.body.ownbooking.email,
      })
      SBdataController.insertData(newsbdata);
    }
  });
})


app.post("/api/travelagent/book/users", (req, res, next) => {
  console.log('in book userss')
  var user = req.body.params.searchKey;
  Bdata.findOne({ 'packageid': req.body.params.searchKey.packageInfo._id, 'user_email': req.body.params.searchKey.email }, function (err, data) {
    console.log(data)
    if (data) {
      console.log('data already inserted');

    } else {
      var newbdata = new Bdata({
        packageInfo: req.body.params.searchKey.packageInfo,
        packageid: req.body.params.searchKey.packageInfo._id,
        user_email: req.body.params.searchKey.email,
        user_name: req.body.params.searchKey.name,

      })
      BdataController.insertData(newbdata);
      res.send('inserted')
    }
  });
})

app.post("/api/admin/package/delete", (req, res, next) => {
  var id = req.body.params.searchKey;
  console.log(id);
  PdataController.deleteData(id);
})


app.post("/api/admin/holiday/delete", (req, res, next) => {
  console.log('in delete');
  var id = req.body.params.searchKey;
  console.log(id);
  HdataController.deleteData(id);
})

app.get("/api/travelagent/flights", (req, res, next) => {
  console.log('in flights api');
  axios({
    "method": "GET",
    "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/2019-12-12",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "d81aaa8463msha2a64a4767e0e5cp1401bcjsncd8885a83f04"
    }, "params": {
      "inboundpartialdate": "2019-12-25"
    }
  })
    .then((response) => {
      // console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error)
    })

})


app.get('/api/travelagent/data', PdataController.getData);
app.get('/api/holiday/data', HdataController.getData);
app.get('/api/user/selfbookings',SBdataController.getData);
app.get('/api/travelagent/bookings', BdataController.getData);

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email']
  }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    req.session.user = req.user;
    if (req.user.role === "User") {
      res.redirect('/loginprofile')
    }
    else {
      res.redirect('/adminprofile')
    }
  });
  

  app.post("/api/travelagent/createholiday", (req, res, next) => {
    Hdata.findOne({ 'Holidayname': req.body.params.searchKey.holidayName, 'startdate': req.body.params.searchKey.startDate, 'enddate': req.body.params.searchKey.enddate}, function (err, data) {
      if (data) {
        console.log('data already inserted');
  
      } else {
        var newhdata = new Hdata({
          Holidayname:req.body.params.searchKey.holidayName,
          startdate:req.body.params.searchKey.startDate,
          enddate:req.body.params.searchKey.endDate,
        })
        HdataController.insertData(newhdata);
      }
    });

  })

app.post("/requestdata", (req, res, next) => {
  var user = req.session.passport.user;
  Rdata.findOne({ 'email': user.email }, function (err, data) {

    if (data) {
      console.log('data already inserted');

    } else {
      var newrdata = new Rdata({
        name: user.name,
        email: user.email,
        googleId: user._Id,
        approved: false,

      })
      RdataController.insertData(newrdata);
    }
  });
})

app.post("/api/travelagent/viewbookings",(req,res,next) =>{
 Bdata.find({ 'packageid': req.body.params.searchKey._id},function(err,data){
    res.json(data);
 });
})

const api = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+in+';
const keyString = '&key=AIzaSyDVQgKy2v09Yce_891pEigZOOpfgC6kra0'
app.post("/hotels/data", (req, res, next) => {
  let a = api + req.body.params.searchKey + keyString;
  axios.get(`${a}`)
    .then(posts => {
      res.status(200).json(posts.data.results);
    }).catch(error => {
      res.status(500).send(error);
    })

});


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/dist/client/index.html'));
});

app.listen(port, function () {
  console.log(`Partner portal running on ${port}!`);
});


