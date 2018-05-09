const crud = require('./crud');
const Opinion = require('../models/Opinion');
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
  req.body.user = req.user._id
  user = req.body.user;
  burger = req.params.id;
  text = req.body.text;
  console.log(req.body);
  Opinion.create({user, burger, text})
  .then(opinion => res.json(opinion))
  .catch(e => next(e));
});





module.exports = router;