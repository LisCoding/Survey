
// require mongoose
var mongoose = require('mongoose');
//create schema
var PollSchema = new mongoose.Schema({
 question: { type: String, required: true, minlength: 8},
 option_1 : { title: {type: String,required: true, minlength: 3 },   vote_count: {type: Number}},
 option_2 : { title: {type: String,required: true, minlength: 3 },   vote_count: {type: Number}},
 option_3 : { title: {type: String,required: true, minlength: 3 },   vote_count: {type: Number}},
 option_4 : { title: {type: String,required: true, minlength: 3 },   vote_count: {type: Number}},
 creator: { type: String, required: true, minlength: 3 }
},{timestamps: true });


// register the schema as a model
// We are setting this Schema in our Models as 'User'
mongoose.model('Poll', PollSchema);
var Poll = mongoose.model('Poll');

mongoose.Promise = global.Promise;
