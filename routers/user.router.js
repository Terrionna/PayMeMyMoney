const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const passport = require('passport');
const client =require('twilio');

router.post('/signup', function(req, res){
  var user = new User(req.body);
  user.setPassword(req.body.password);
  user.save(function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'You successfully signed up'
      });
    }
  });
});
router.post('/login', function(req, res, next){
  passport.authenticate('local', function(err, user, data){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    if(!user){
      return res.status(404).json({
        msg: 'The username and/or password you have provided is incorrect'
      });
    }
    if(user && !user.validPassword(req.body.password)){
      return res.status(401).json({
        msg: 'The username and/or password you have provided is incorrect'
      });
    }
    return res.status(200).json({
      token: user.generateJwt()
    });
  })(req, res, next);
});
router.get('/users', function(req, res){
  User.find({}, function(err, users){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        users:users
      });
    }
  });
});
router.get('/users/:id', function(req, res){
  User.find({_id: req.params.id}, function(err, users){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        users: users
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
router.put('/users/:id', function(req, res){
  User.findOneAndUpdate({_id: req.params.id}, req.body, function(err, user){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully updated a user'
      });
    }
  });
});
router.delete('/users/:id', function(req, res){
  User.remove({_id: req.params.id}, function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully deleted a user'
      });
    }
  });
});

module.exports = router;
