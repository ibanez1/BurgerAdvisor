const crud = require('./crud');
const Burger = require('../models/Burger');
const upload = require('../config/multer');
const _ = require("lodash");

const router = crud(Burger);

  // Create
  router.post('/new', upload.single('file'), function(req, res) {
    console.log(req.body);
    console.log(req.file);
    const burger = new Burger({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: `/uploads/${req.file.filename}`,
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
