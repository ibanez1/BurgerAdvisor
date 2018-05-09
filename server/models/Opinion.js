const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../models/User");
const Burger = require("../models/Burger");


const opinionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  burger: {type:Schema.Types.ObjectId, ref: 'Burger'},
  text: { type: String }
},
 {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Opinion = mongoose.model("Opinion", opinionSchema);

module.exports = Opinion;