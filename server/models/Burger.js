const mongoose = require("mongoose");
const User = require("../models/User");
const Schema = mongoose.Schema;

const burgerSchema = new Schema(
  {
    title: String,
    description: String,
    price: Number,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    imgName: String,
    imgPath: String,
    restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" }
    
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Burger = mongoose.model("Burger", burgerSchema);

module.exports = Burger;