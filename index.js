var express = require('express');
var app = express();
var path = require('path');
var port =  8080;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/projects', function (req, res) {
  res.sendFile(path.join(__dirname, 'html', 'projects.html'));
});

app.get('/embedded.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'embedded.css'));
});

app.get('/images/homebg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'homebg.jpg'));
});

app.get('/images/android.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'android.jpg'));
});

app.get('/images/webdev.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'webdev.jpg'));
});

app.get('/images/projects.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'projects.jpg'));
});

app.listen(port, function () {
  console.log('app is listening on ' + port);
});



// es.sendFile(path.join(__dirname, 'ui', 'index.html'));
// });
