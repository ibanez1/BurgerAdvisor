const crud = require('./crud');
const Restaurant = require('../models/Restaurant');
const _ = require("lodash");

const router = crud(Restaurant);

router.post('/new', (req,res, next) => {
  req.body.user = req.user._id
  user = req.body.user;
  title = req.body.title;
  /* imgName = req.file.originalname;
  imgPath = req.file.url; */
  imgName = req.body.imgName;
  imgPath = req.body.imgPath;
  location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  }
  console.log("-----------------");
  obj = {user, title, imgName, imgPath, APIlocation: location}
  console.log(obj);
  Restaurant.create(obj)
  .then(restaurant => res.json(restaurant))
  .catch(e => next(e));
});

module.exports = router;