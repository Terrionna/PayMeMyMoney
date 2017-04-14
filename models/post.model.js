var mongoose = require('mongoose');


var postSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
    required: false
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateOwed: {
    type: Date,
    required: true
  },
  author: {
    required: true,
    type: mongoose.Schema.Types.ObjectId
  }
});

postSchema.pre('findOneandUpdate', function(){
  this.update({}, {$set: {updated: Date.now() }});
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
