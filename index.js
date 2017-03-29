var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var moneyRouter = require('./routers/money.router');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').mongoURI;

//powerup--middleware
server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
server.get('/', function(request, response){
  response.sendFile('index.html', {root:__dirname + '/public/html'})
});
//connect to the database
mongoose.connect(mongoURI);

server.use(moneyRouter);

server.listen(port, function(){
  console.log('Now Listening on Port...', port)
});
