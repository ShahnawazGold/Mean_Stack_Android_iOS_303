
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/my_db');

var aboutSchema = mongoose.Schema({


    title:  String, 
    author: String,
    body:   String,
    _userId: Schema.Types.ObjectId,
    comments: [{
        comment: String,
         date: Date 
    }],

    date: { type: Date, default: Date.now },
    hidden: Boolean,

    meta: {   
      votes: Number,
      favs:  Number
    }
 });
 console.log("Schema Aabout");
 var Person = mongoose.model("Person", aboutSchema);