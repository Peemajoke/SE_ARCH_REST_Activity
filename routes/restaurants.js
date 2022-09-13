const express = require('express')
const {getRestaurants,
    getRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,} = require('../controllers/restaurants')

const router = express.Router()

router
    .get('/', getRestaurants)
    .get('/:ID', getRestaurant)
    .post('/', createRestaurant)
    .put('/:ID', updateRestaurant)
    .delete('/:ID', deleteRestaurant)
module.exports = router