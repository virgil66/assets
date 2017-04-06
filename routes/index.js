var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

router.get('/news', function(req, res, next) {
	res.render('news', {title: '-新闻中心'});
});

router.get('/news/newsInfo', function(req, res, next) {
  res.render('newsInfo', {title: '-新闻中心'});
});

router.get('/business', function(req, res, next) {
  res.render('business', {title: '-公司业务'});
});

router.get('/case', function(req, res, next) {
  res.render('case', {title: '-投资案例'});
});

router.get('/service', function(req, res, next) {
  res.render('service', {title: '-尊享服务'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {title: '-联系我们'});
});




module.exports = router;
