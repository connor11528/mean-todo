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
   
// configuration 
mongoose.connect('mongodb://localhost/angular-express-mongodb');

app.configure(function(){
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

app.listen(8080);
console.log('app is listening on port 8080');
