
module.exports = function(app){

	app.get('*', function(req, res) {
		// deprecated. though res.sendFile breaks
		res.sendfile('./public/index.html');
	});

};