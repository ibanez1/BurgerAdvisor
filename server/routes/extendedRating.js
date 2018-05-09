const crud = require('./crud');
const Rating = require('../models/Rating');

const router = crud(Rating);

router.get('/burger/:id', (req,res) => {
  Rating.find({burger_id:req.params.id}).then(ratings => {
    return res.json(ratings);
  })
})
module.exports = router;