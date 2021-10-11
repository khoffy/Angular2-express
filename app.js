var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');

server.listen(process.env.PORT || 9999, function() {
	console.log("Server connected. Listening on port: " + (process.env.PORT || 9999));
}

app.use(bodyParser.json());
app.use(bpdyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/front'));

app.get('/test', function(req, res) { //example http request receiver
	return res.send(myTestVar);
});
