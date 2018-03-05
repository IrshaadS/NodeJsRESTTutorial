//api1
var express = require("express");

var api = express.Router();

api.get("/timezone", function(req, res){
	res.send("sample response for timezone");
});

api.get("/all_timezones", function(req, res){
	res.send("Sample response for all timezones");
});

module.exports = api;