var express = require('express');
var router = express.Router();
const db = require('../database/models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fercho', function(req, res, next){
  res.status(200).json({saludo: 'que haces fercho todo piola?'})
})

router.get('/users', function(req, res, next){
  db.User.findAll()
    .then(data => res.status(200).json(data))
})

module.exports = router;
