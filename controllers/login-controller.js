module.exports.authenticate=function(req,res){

  var email=req.body.username;
  var password=req.body.password;

  if (email && password) {
      if(password==123){
        sess = req.session;
        sess.username = email;
        sess.password = password;
        console.log(sess);
        res.redirect('/home');
      }else{
        res.render('pages/login',{
          alert_danger: "alert alert-danger",
          error: "Email and password does not match"
        });
      }
  } else {
    res.redirect('/login');
  }
}
