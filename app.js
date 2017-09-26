var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var logger = require('morgan');
var path = require('path');

app.use(bodyParser.json({limit: '50mb'}));

// http logging
//app.use(logger(':remote-addr'));
//app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;
