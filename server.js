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

// define model
var Todo = mongoose.model('Todo', {
	text: String
	// MongoDB will automatically generate an _id
});

// ================ routes ====================

// get all todos
app.get('/api/todos', function(req, res){
	// mongoose gets all todos in the database
	Todo.find(function(err, todos){
		if (err) res.send(err);
		
		res.json(todos); // return in json format
	});
});

// create todo
app.post('/api/todos', function(req, res){
	Todo.create({
		// info will come from angular ajax request
		text: req.body.text,
		done: false
	}, function(err, todo){
		if(err) res.send(err);
		// return all todos
		Todo.find(function(err, todos){
			if(err) res.send(err);
			
			res.json(todos);
		});
	});
});

// delete a todo
app.delete('/api/todos/:todos_id', function(req, res){
	Todo.remove({
		_id: req.params.todo_id
	}, function(err, todo){
		if (err) res.send(err);
		
		// return all todos
		Todo.find(function(err, todos){
			if (err) res.send(err);
			
			res.json(todos);
		});
	});
});

// listen
app.listen(8080);
console.log('app is listening on port 8080');
