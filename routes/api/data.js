const express = require('express');
const router = express.Router();

// Data model
const DataPoint = require('../../models/DataPoint');

// @route GET api/data
// @desc Get current data
router.get('/', (req, res) => {
    let hours = req.query.hours;
    console.log(hours);

    DataPoint.find({
        //                         "2013-10-01T00:00:00.000Z"
        "Date" : {"$gte": new Date("2020-06-06T00:00:00.000Z")}
    })
    .then(posts => res.json(posts))

    // DataPoint.find()
    // .then(posts => res.json(posts));
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