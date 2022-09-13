const mongoose = require('mongoose')

const CoordinateSchema = new mongoose.Schema({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },

  })

const RestaurantSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      address: { type: String, required: true },
      restaurant_picture_link: { type: [String], required: true },
      recommended_dish: { type: [String], required: true },
      tag: { type: [String], required: true },
      coordinate: { type: CoordinateSchema, required: true },
      rating: { type: Number, required: true },
    },
)

const RestaurantModel = mongoose.model('restaurants', RestaurantSchema)
module.exports = RestaurantModel