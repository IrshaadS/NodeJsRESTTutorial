// api2.js

var express = require('express');

var api = express.Router();

api.get("/timezone", function(req, res){
	res.send("Respons from APIV2");
});

module.exports = api;