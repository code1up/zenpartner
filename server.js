var express = require("express");
var fs = require("fs");
// var ws = require("./zenws/usagews.js");

var app = express.createServer();

app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(__dirname + "/webapp"));

app.get("/", function(req, res) {
	res.redirect("/index.html");
});

// app.get("/user/:username/:password/signin", function(req, res, next) {
app.get("/api/signin/:username/:password", function(req, res, next) {
	var username = req.params.username;
	var password = req.params.password;

	console.log(username);
	console.log(password);

	res.contentType("text/json");

	ws.signin(username, password, function(error, data) {
		if (error) {
			res.send(error);
		} else {
			res.send(data);
		}
	});
});

app.listen(3000);

console.log("\n<<< started");
