
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  longURL: {
    type: String,
    required: 'ENTER LONG URL TO SHORT IT.'
  },
  shortURL: {
    type: String,
    default: 'https://nitishk72.hithub.io'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: [ 'active', 'notActive']
    }],
    default: ['active']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
