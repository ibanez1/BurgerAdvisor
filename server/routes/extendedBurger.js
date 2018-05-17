const crud = require('./crud');
const Burger = require('../models/Burger');
const _ = require("lodash");
const uploadCloud = require('../config/cloudinary.js');

const router = crud(Burger);

  // Create
  router.post('/new', uploadCloud.single('file'), function(req, res) {
    console.log(1)
    console.log(req.body);
    console.log(req.file);
    const burger = new Burger({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      imgPath: req.file.url,
      restaurant: req.body.restaurant,
      rates: []
    });
  
    burger.save((err) => {
      if (err) {
        return res.send(err);
      }
  
      return res.json({
        message: 'New Burger created!',
        burger: burger
      });
    });
  });


  module.exports = router;
