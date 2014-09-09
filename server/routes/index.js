var express = require('express');
var router = express.Router();

// var mongoose = require('mongoose');
// var Post = mongoose.model('Post');
// var Comment = mongoose.model('Comment');

router.get('*', function(req, res) {
	// deprecated. though res.sendFile breaks
	res.sendfile('./public/index.html');
});

module.exports = router;
