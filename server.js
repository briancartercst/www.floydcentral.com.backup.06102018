var express = require('express');
var app = express();

app.use(express.static('soccerportal/site'));

app.listen(8080);
