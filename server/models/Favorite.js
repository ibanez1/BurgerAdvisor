const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User = require("../models/User");
const Burger = require("../models/Burger");

const favoriteSchema = new Schema({
 /*  favoriteBurger: { type: Schema.Types.ObjectId, ref: 'Favorite' }, */
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  burger: {type:Schema.Types.ObjectId, ref: 'Burger'}

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;