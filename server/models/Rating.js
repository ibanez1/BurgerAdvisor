const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  burger: { type: Schema.Types.ObjectId, ref: "Burger" },
  rate: { 
    type: Number,
    min: [1, 'bad burger'],
    max: [5, 'excellent']}
});

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;