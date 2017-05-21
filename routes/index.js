var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('./index.html', { title: 'Express' });
});


router.get('/about', function(req, res, next) {
  res.render('./about-us.html', { title: 'Express' });
});

router.get('/machines', function(req, res, next) {
  res.render('./portfolio.html', { title: 'Express' });
});

router.get('/news', function(req, res, next) {
  res.render('./blog.html', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('./contact-us.html', { title: 'Express' });
});

module.exports = router;
