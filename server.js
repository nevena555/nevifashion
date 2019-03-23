const express = require('express');
var router = require('./router.js');

//App setup
const app = express();
const server = require('http').createServer(app);
server.listen(process.env.PORT || 4000 , function () {
  console.log('Server is up!');
});

// set the view engine to ejs
app.set('view engine', 'ejs');

// router file
app.use('/', router);

//Static files for resource folder (img,video,css and etc.)
app.use(express.static('./views/resource'));
