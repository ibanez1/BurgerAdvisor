const crud = require('./crud');
const Opinion = require('../models/Opinion');
const session = require('express-session');
const passport = require('passport');
const _ = require("lodash");


const router = crud(Opinion);

router.get('/user/:id', (req,res) => {
  Opinion.find({user:req.params.id}).then(opinions => {
    return res.json(opinions);
  })
});

router.get('/burger/:id', (req,res) => {
  Opinion.find({burger:req.params.id}).then(opinions => {
    return res.json(opinions);
  })
});

router.post('/burger/:id', (req,res, next) => {
  console.log("HOLA");
  console.log(req.body.user)
  let user = req.body.user;
  let burger = req.params.id;
  let text = req.body.text;
  console.log(text)
  Opinion.create({user, burger, text})
  .then(opinion => res.json(opinion))
  .catch(e => next(e));
});





module.exports = router;