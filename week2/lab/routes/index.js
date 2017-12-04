var express = require('express');
var util = require('util');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { pagetitle: 'Wyatts IndexPage' });
});
router.get('/index', function (req, res, next) {
  res.render('index', { pagetitle: 'Wyatts IndexPage' });
});
router.get('/form', function (req, res, next) {
  res.render('form', { pagetitle: 'Wyatts FormPage' });
});
router.post('/form', function (req, res, next) {
  
  res.render('result', { pagetitle: 'Wyatts ResultPage', email: req.body.email, name: req.body.name, comments: req.body.comments });
});
router.get('/about', function (req, res, next) {
  res.render('about', { pagetitle: 'Wyatts AboutPage' });
});


module.exports = router;
