var express = require('express');
var server = express();

server.get('/.well-known/apple-app-site-association', function(request, response) {
  console.log(__dirname);
  response.sendFile('/home/ec2-user/apple-app-site-association/apple-app-site-association');
});

server.get('/', function(request, response) {
  response.send("Hello World");
});

server.listen(80);
