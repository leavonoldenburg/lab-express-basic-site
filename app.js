const { response } = require('express');
const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

app.use(function (request, response, next) {
  //console.log('A request was received');
  console.log('A request was made to:' + request.path);
  //Calling next allows the request to move forward
  next();
});

app.use(express.static('public'));

app.get('/', function (request, response) {
  //response.sendFile(__dirname + '/views/home.html');
  response.render('home', {
    title: 'homepage',
    message: 'HOME',
    article: 'Welcome to the homepage.'
  });
});

app.get('/about', function (request, response) {
  //response.sendFile(__dirname + '/views/about.html');
  response.render('about', {
    title: 'about',
    message: 'ABOUT'
  });
});

app.get('/works', function (request, response) {
  //response.sendFile(__dirname + '/views/works.html');
  response.render('works', {
    title: 'works',
    message: 'WORKS'
  });
});

app.get('*', function (request, response) {
  response.sendFile(__dirname + '/views/home.html');
});

app.listen(3020);
