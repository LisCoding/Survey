var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = {

  //Show all
  showAll: function(req, res) {
    Poll.find({}, function (err, polls) {
      if(err){
        console.log("did not get data",err);
      }else {
        return res.json(polls); //passing to the client
      }
    })
  },

  createPoll: function (req, res){
    console.log("we create a Poll", req.body);
    // I changed this line
    delete req.body._id // passing data from the form
     Poll.create(req.body, function(err, poll) {
         if(err) {
             console.log('something went wrong we can not create a Poll ');
             console.log(err.errors);
         } else {
             console.log('successfully added a Poll!', poll);
             return res.json(poll) //response to the client
         }
     })
  },

  showPoll: function(req, res) {
    Poll.findOne({_id: req.params.id}, function (err, poll) { //id is build object into the req object
      if(err){
        console.log("something went wrong controller finding one poll", err);
      }else {
        res.json(poll);
      }
    })
  },


  deletePoll: function(req, res) {
    Poll.remove({_id: req.params.id}, function (err, poll) {
      if(err){
        console.log(err);
      }else {
        console.log('successfully deleted a Poll!');
        return res.json(true)
      }
    })
  },

  updatePoll: function(req, res) {
    Poll.update({_id:req.params.id}, req.body, function(err, poll) {
      if(err) {
          console.log('something went wrong we can not update');
          console.log(err.errors);
          res.send(err.errors);
      } else {
          console.log('successfully updated a poll!');
          return res.json(true)
      }
    })
  }

}
