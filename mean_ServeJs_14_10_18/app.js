




var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var path = require('path');


 var app= express();
 
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// var ionic = require('./routes/ionic.js'); 
// app.use('/ionic', ionic);

// app.get('*',(req,res)=> {
//   res.sendFile(path.join(__dirname,'public/index.html'));
// });
var about = require('./routes/about.js');
app.use('/about',about);

// app.get('/home/:name/:id',function (req,res) {
//    res.send(req.params.name+' home' + req.params.id);
// });

app.listen(8000);
console.log("server running on port 8000");