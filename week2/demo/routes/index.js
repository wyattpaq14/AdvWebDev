var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Watch out im routin here!', msg:"you are a potato and you will like it" });
});

router.get('/form', function(req, res, next) {
  res.render('form', {  });
});

router.post('/form', function(req, res, next) {
  res.render('form', {  });
});


module.exports = router;
