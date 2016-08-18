'use strict';

var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('public'));
app.get('/', function(req,res){
	res.sendfile("./index.html");
});

app.listen(5000, function(){
	console.log("We are listening")
})