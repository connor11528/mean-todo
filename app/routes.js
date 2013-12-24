var Todo = require('./models/todo');

module.exports = function(app){

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
	console.log(req.params.todo_id);
	
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

// application route
app.get('*', function(req, res){
	// send the angular app
	res.sendFile('/public/index.html');
});

};
