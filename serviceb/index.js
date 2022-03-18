var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Welcome Service B');
});

app.get('/tcs', function (req, res) {
    res.send('Service B');
});

app.get('/wizard', function (req, res) {
  res.send('Service B HI wizard');
});

// Handle 404 - Keep this as a last route
app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});

app.listen(8045, function () {
    console.log('Example app listening on port 8080!');
});