var express = require('express');
var server = express();

server.get('/.well-known/apple-app-site-association', function(request, response) {
  console.log(__dirname);
  response.send({
    "applinks": {
      "details": [
        {
          "appID": "7JMU3EK8QX.com.paypal.ppclient-development",
          "paths": [
            "*",
            "/",
            "/*",
            "/braintree-payments/*"
          ]
        }
      ]
    },
    "webcredentials": {
      "apps": [
        "7JMU3EK8QX.com.paypal.ppclient-development"
      ]
    }
  });
});

server.get('/', function(request, response) {
  response.send("Hello World");
});

server.listen(80);
