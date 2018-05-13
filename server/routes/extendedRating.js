const crud = require('./crud');
const Rating = require('../models/Rating');
const Burger = require('../models/Burger');

const router = crud(Rating);

router.get('/burger/:id', (req,res) => {
  Rating.find({burger:req.params.id}).then(ratings => {
    return res.json(ratings);
  })
})

router.post('/burger/:id', (req,res, next) => {
  let user = req.body.user;
  let burger = req.params.id;
  let rate = req.body.rate;
return Promise.all([
  Burger.findByIdAndUpdate(req.params.id, { $push: {rates: rate}}),
   
  Rating.create({user, burger, rate})
])
.then(object =>{ res.json(object)
})
.catch(err => {
  console.log(err);
  next(err);
})
});


module.exports = router;