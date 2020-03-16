const RdataController=require('../users/request.controller');
var express = require('express');

var app = express();

app.get('/data',RdataController.getData);
