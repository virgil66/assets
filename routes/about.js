var express = require('express');
var router = express.Router();


/* GET about page. */


module.exports = function(req, res, next) {
	res.render('about', { title: '-关于我们' });
}