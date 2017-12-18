'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');


exports.unAuthorise = function(req, res) {
      var a = "error :Anauthoris Access";
      res.json(a);
};
exports.redirect = function(req, res) {
  Task.findById(req.params.id, function(err, task) {
    if (err)
      res.send(err);
    else
      res.json(task.shortURL);
  });
};
exports.list_all_url = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    else
      res.json(task);
  });
};
exports.create_a_short_url = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    else
     res.json(task);
  });
};
exports.read_a_task = function(req, res) {
  Task.findById(req.params.id, function(err, task) {
    if (err)
      res.send(err);
    else
      res.json(task);
  });
};
exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    else
      res.json(task);
  });
};
exports.delete_short_url = function(req, res) {
  Task.remove({
    _id: req.params.id
  }, function(err, task) {
    if (err)
      res.send(err);
    else
      res.json({ message: 'Shorten Deleted Successfully' });
  });
};
