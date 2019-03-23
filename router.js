const express = require('express');
var router = express.Router();
var path = require('path');

// route to handle entry point
router.get('/', function(req, res){
  res.render('pages/index',{Users: "hi"});
});
// route to handle Registration form
router.get('/gallery', function(req, res){
  res.render('pages/gallery');
});
// route to handle login form
router.get('/contact', function(req, res){
  res.render('pages/contact');
});
// route to handle About
router.get('/about', function(req, res){
  res.render('pages/about', {
    user: 'userName',
    Title: 'title1',
    Message: 'message'
  });
});


module.exports = router;
