var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Welcome Service A');
});

app.get('/tcs', function (req, res) {
    res.send('Service A');
});

app.get('/wizard', function (req, res) {
  res.send('Service A HI wizard');
});

// Handle 404 - Keep this as a last route
app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});

app.listen(6000, function () {
    console.log('Example app listening on port 8080!');
});