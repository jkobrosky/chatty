var messages = [{ message: 'Hello' }];

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(bodyParser());
app.use(cors());

app.get('/', function(req, res) {
	console.log("got get");
	res.json(messages);
});

app.post('/', function(req, res) {
	console.log(req.body);
	messages.push(req.body);
	res.json(messages);
});

app.listen(8887);