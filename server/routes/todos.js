var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

// get all todos
router.get('/todos', function(req, res){
	Todo.find(function(err, todos){
		if (err) res.send(err);
		res.json(todos);
	});
});

// create todo
router.post('/todos', function(req, res){
	Todo.create({
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
router.delete('/todos/:id', function(req, res){
	var todo_id = req.params.id;
	
	Todo.remove({ _id: todo_id }, function(err, todo){
		if (err) res.send(err);
		// return all todos
		Todo.find(function(err, todos){
			if (err) res.send(err);
			
			res.json(todos);
		});
	});
});

module.exports = router;