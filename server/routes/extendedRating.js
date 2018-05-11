const crud = require('./crud');
const Rating = require('../models/Rating');

const router = crud(Rating);

router.get('/burger/:id', (req,res) => {
  Rating.find({burger_id:req.params.id}).then(ratings => {
    return res.json(ratings);
  })
})

router.post('/burger/:id', (req,res) => {
  user = req.user._id
  burger = req.params.id;
  rate = req.body.rate;
  Rating.create({user, burger, rate})
  .then(rate => res.json(rate))
  .catch(e => next(e));
  
});

module.exports = router;