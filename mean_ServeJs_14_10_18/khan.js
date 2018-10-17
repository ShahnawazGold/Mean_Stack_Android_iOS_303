
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var path = require('path');

var app= express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/home', function (req, res) {
    res.send('Hello World shah');
 })

 var ionic = require('./routes/ionic.js'); 
app.use('/ionic', ionic);


 app.listen(3000);
console.log("server running on port 3000");