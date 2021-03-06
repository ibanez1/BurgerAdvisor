const crud = require('./crud');
const Opinion = require('../models/Opinion');
const session = require('express-session');
const passport = require('passport');
const _ = require("lodash");


const router = crud(Opinion);

router.get('/user/:id', (req,res) => {
  Opinion.find({user:req.params.id})
  .populate('burger')
  .then(opinions => {
    return res.json(opinions);
  })
});

router.get('/burger/:id', (req,res) => {
  Opinion.find({burger:req.params.id})
  .populate('user')
  .then(opinions => {
    return res.json(opinions);
  })
});

router.post('/burger/:id', (req,res, next) => {
  let user = req.body.user;
  let burger = req.params.id;
  let text = req.body.text;
  Opinion.create({user, burger, text})
  .then(opinion => res.json(opinion))
  .catch(e => next(e));
});





module.exports = router;