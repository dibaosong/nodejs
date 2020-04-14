module.exports = function(app){

    app.use('/api/user', require('./user'));

    app.use(function (err, req, res, next) {
		if (err) {
			res.json({"code": 0, "url": "hao"});
		}
	});

}