/* APItypePoint: String,
APIlocation: { type: { type: String }, coordinates: [Number] }

restaurantSchema.index({ location: '2dsphere' }); */