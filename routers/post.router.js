var express = require('express');
var router = express.Router();
var Post = require('../models/post.model');
var client = require('twilio');

router.get('/posts', function(req, res){
  Post.find({}, function(err, posts){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        posts: posts
      });
    }
  });
});
router.get('/posts/:id', function(req, res){
  Post.find({_id: req.params.id}, function(err, posts){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        posts: posts
      });
    }
  });
});
router.post('/posts', function(req, res){
  var post = new Post(req.body);
  post.save(function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'Created a post successfully'
      });
    }
  });
});
router.put('/posts/:id', function(req, res){
  Post.findOneAndUpdate({_id: req.params.id}, req.body, function(err, post){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully updated post'
      });
    }
  });
});
router.delete('/posts/:id', function(req, res){
  Post.remove({_id: req.params.id}, function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully deleted'
      });
    }
  });
});
router.get('/testtwilio', function(req, res){
  client.sendMessage({
    to: '+12179044242',
    from: 'TWILIO_NUMBER',
    body: 'Hello from Twilio!'
  }, function(err){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(201).json ({
        msg: 'Text was successful'
      });
    }
  });
});
module.exports = router;
