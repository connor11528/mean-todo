// This file will:

// -Configure our application
// -Connect to our database
// -Create our Mongoose models
// -Define routes for our RESTful API
// -Define routes for our frontend Angular application
// -Set the app to listen on a port so we can view it in our browser

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var database = require('./config/config');
   
// configuration 
mongoose.connect(database.development.db);

app.configure(function(){
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});


// load routes
require('./app/routes')(app);

// listen
var port = process.env.PORT || 8080;
app.listen(port);
console.log('app is listening on port ' + port);
