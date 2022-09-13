const restaurantModel = require('../models/restaurant')

exports.getRestaurants = async (req,res) => {
    try {
        const result = await restaurantModel.find()
        const total = await restaurantModel.countDocuments();
        res.status(200).json({ success: true, total, data: result })
    } catch (error) {
        return res.status(500).json({ success: false })
    }
}

exports.getRestaurant = async (req,res) => {
    try {
        const result = await restaurantModel.findById(req.params.ID)
        if(!result){
            res.status(404).json({ httpCode: '404', Message: 'Sorry, there is no restaurant you are looking for.' })
        }else{
            res.status(200).json({ success: true, data: result })
        }
    } catch (error) {
        return res.status(500).json({ success: false })
    }
}

exports.createRestaurant = async (req,res) => {
    try {
        const result = await restaurantModel.create(req.body)
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        return res.status(500).json({ success: false })
    }
}

exports.updateRestaurant = async (req,res) => {
    try {
        const result = await restaurantModel.findByIdAndUpdate(req.params.ID, req.body, {
            new: true, 
            runValidators:true //must set this option to true to make DB check if the req.body match the schema in db.js
          });
        if(!result){
            res.status(404).json({ httpCode: '404', Message: 'Sorry, there is no restaurant you are looking for.' })
        }else{
            res.status(200).json({ success: true, data: result });
        }
    } catch (error) {
        return res.status(500).json({ success: false })
    }
}

exports.deleteRestaurant = async (req,res) => {
    try {
        const result = await restaurantModel.findById(req.params.ID)
        if(!result){
            res.status(404).json({ httpCode: '404', Message: 'Sorry, there is no restaurant you are looking for.' })
        }else{
            result.remove();
            res.status(200).json({ success: true, data:{}});
        }
    } catch (error) {
        return res.status(500).json({ success: false })
    }
}