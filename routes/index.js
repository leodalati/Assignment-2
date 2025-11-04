var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET AboutMe page. */
router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET contactMe page. */
router.get('/contactMe', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
