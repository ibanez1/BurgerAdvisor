const crud = require('./crud');
const Restaurant = require('../models/Restaurant');
const _ = require("lodash");

const router = crud(Restaurant);

router.get('/burger/:id', (req,res) => {
  Restaurant.find({burger:req.params.id}).then(restaurants => {
    return res.json(restaurants);
  })
});

router.post('/new/:id', (req,res, next) => {
  let user = req.body.user;
  let burger = req.params.id;
  let title = req.body.title;
  /* imgName = req.file.originalname;
  imgPath = req.file.url; */
  imgName = req.body.imgName;
  imgPath = req.body.imgPath;
  location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  }
  console.log("-----------------");
  obj = {user, burger, title, imgName, imgPath, APIlocation: location}
  console.log(obj);
  Restaurant.create(obj)
  .then(restaurant => res.json(restaurant))
  .catch(e => next(e));
});

module.exports = router;