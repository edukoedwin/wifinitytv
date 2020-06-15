var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res) {
  res.render('about', { title: 'Express' });
});
router.get('/stream', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/getapp', function(req, res) {
  res.render('getApp', { title: 'Express' });
});

module.exports = router;
