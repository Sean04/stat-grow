const express = require('express');
const router = express.Router();

// Data model
const DataPoint = require('../../models/DataPoint');

// @route GET api/data
// @desc Get current data
router.get('/', (req, res) => {
    DataPoint.find()
        .then(datapoints => res.json(datapoints))
});

router.post('/', (req, res) => {
    const newDataPoint = new DataPoint({
        temperature: 20,
        humidity: 50,
        soil_temperature: 20,
        soil_moisture: 40,
        light: 60,
    });

    newDataPoint.save().then(datapoint => res.json(datapoint));
})

module.exports = router;