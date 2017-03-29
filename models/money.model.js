var mongoose = require('mongoose');


var moneySchema = mongoose.Schema({
  name: String,
  date: Date,
  reason: String,
  amount: Number
});
//Create the Mongoose Model
var Money = mongoose.model('Money', moneySchema);
module.exports = Money;
