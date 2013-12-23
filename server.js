// This file will:

// -Configure our application
// -Connect to our database
// -Create our Mongoose models
// -Define routes for our RESTful API
// -Define routes for our frontend Angular application
// -Set the app to listen on a port so we can view it in our browser

var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require('passport'),
    fs = require('fs');
    
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
    

    
// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(config.db);

app.configure(function(){
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log('app is listening on port ' + port);