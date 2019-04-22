const express = require('express');
var router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');


var loginController = require('./controllers/login-controller');

//Static files
router.use(session({
  secret: 'awdawd',
  resave: false,
  saveUninitialized: true
}));
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var sess;

// route to handle entry point
router.get('/', function(req, res){
  res.render('pages/index',{Users: "hi"});
});
// route to handle Registration form
router.get('/gallery', function(req, res){
  res.render('pages/gallery');
});
router.get('/login', function(req, res){
  res.render('pages/login',{
    alert_danger: "",
    error: ""
  });
});
router.post('/controllers/login-controller', loginController.authenticate);

router.get('/home', function(req, res){
  sess = req.session;
  res.render('pages/home',{
    user: sess.username
  });
});
// route to handle contact form
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
router.get('/logout',function(req,res){
  req.session.destroy(function(err) {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/');
      console.log(req.session);
    }
  });
});

module.exports = router;
