

var express = require('express');
var router = express.Router();

About = require('../schema/about.js');

// router.get('/:id', function(req, res){
// //    res.send(' About yes.');
//    res.send('The id you specified is ' + req.params.id);
 
// });
router.get('/', function(req, res){
    res.send('The id you specified is ');
  
 });
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;