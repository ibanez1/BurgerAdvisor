/* APItypePoint: String,
APIlocation: { type: { type: String }, coordinates: [Number] }

restaurantSchema.index({ location: '2dsphere' }); */

const mongoose = require("mongoose");
const User = require("../models/User");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    title: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    imgName: String,
    imgPath: String,
    APItypePoint: String,
    APIlocation: { type: { type: String }, coordinates: [Number] }
    
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

restaurantSchema.index({ location: '2dsphere' });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;