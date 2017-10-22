var express = require('express');
var router = express.Router();
var debug = require('debug')('lab:index');

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Lab3', numbers: numbers });
});

router.post('/', function (req, res, next) {
  debug(req.body.numselect);
  res.render('colorgrid', { title: 'Lab3', selectednumber: req.body.numselect });
});

module.exports = router;
