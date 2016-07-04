var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '우석아 오목 지금 수정중' });
});

module.exports = router;
