const { response } = require('express');
const express = require('express');
const app = express();

app.use(function (request, response, next) {
  //console.log('A request was received');
  console.log('A request was made to:' + request.path);
  //Calling next allows the request to move forward
  next();
});

app.use(express.static('public'));

app.get('/home', function (request, response) {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', function (request, response) {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', function (request, response) {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('*', function (request, response) {
  response.sendFile(__dirname + '/views/home.html');
});

app.listen(3020);
