var express = require('express');
var moneyRouter = express.Router();
var Money = require('../models/money.model');
var bodyParser = require('body-parser');
moneyRouter.use(bodyParser.json()); // for parsing application/json
moneyRouter.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// GET /money
moneyRouter.get('/money', function(req, res){
  Money.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        money: documents
      });
    }
  });
});
// GET /money/:id
moneyRouter.get('/money/:id', function(req, res){
  Money.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        animals: documents
      });
    }
  });
});
// Post /money
moneyRouter.post('/money', function(req, res){
  var money = new Money(req.body);
  money.save(function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else{
      res.status(201).json({
        msg: 'Success'
      });
    }
  });
});
// PUT /money/:id
moneyRouter.put('/money/:id', function(req, res){
  console.log(req.body);
  Money.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      })
    } else {
      res.status(200).json ({
        msg: 'Successfully Updated'
      });
    }
  });
});
// DELETE /money/:id
moneyRouter.delete('/money/:id', function(req, res){
  Money.remove({_id: req.params.id}, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      })
    } else {
      res.status(200).json({
        msg: 'Successfully Delete'
      });
    }
  });
});

module.exports = moneyRouter;
