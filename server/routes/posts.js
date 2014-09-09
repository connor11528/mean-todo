var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

// all posts
router.get('/posts', function(req, res, next){
	Post.find(function(err, posts){
		if(err) return next(err);
		res.json(posts);
	})
});

// create post
router.post('/posts', function(req, res, next){

	var post = new Post(req.body);
	// validation happens on mongoose model...
	post.save(function(err, post){
		if (err) return next(err);
		res.json(post);
	})
});

// maps logic to route parameters
// http://expressjs.com/4x/api.html#app.param

module.exports = router;