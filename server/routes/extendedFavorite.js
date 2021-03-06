const crud = require('./crud');
const Favorite = require('../models/Favorite');
const _ = require("lodash");

const router = crud(Favorite);

router.get('/user/:id', (req,res) => {
  
  Favorite.find({user:req.params.id})
  .populate('burger')
  .then(favorites => {
    return res.json(favorites);
  })
});

router.post('/burger/:id', (req,res, next) => {
  let user = req.body.user;
  let burger = req.params.id;
  Favorite.create({user, burger})
  .then(favorite => res.json(favorite))
  .catch(e => next(e));
});



module.exports = router;