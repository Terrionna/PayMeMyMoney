var express = require('express');
var server  = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var client = require('twilio');
var userRouter = require('./routers/user.router');
var postRouter = require('./routers/post.router');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').MONGOURI;
var client = (process.env.TWILIO_AUTH_TOKEN, process.env.TWILIO_ACCOUNT_SID)
//run the passport configuration
require('./config/passport');
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));



//Connect to the database
mongoose.connect(mongoURI);

server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.use(userRouter);
server.use(postRouter);

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
