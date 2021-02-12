const express = require('express');
const router = express.Router();

// Data model
const DataPoint = require('../../models/DataPoint');

// @route GET api/data
// @desc Get current data
router.get('/', (req, res) => {
    console.log(req.query);

    let hours = req.query.hours;
    if (typeof hours === 'undefined'){
        hours = 0;
    }

    console.log("Hours: ");
    console.log(hours);

    // New Date object
    const d = new Date();
    console.log("Current date/time: ");
    console.log(d);

    // Adjust for timezone
    console.log("Adjusted timezone:");
    d.setHours(d.getHours() + 10);
    console.log(d);

    // Subtract time to get start of data
    console.log("Time to get data from: ")
    if (hours === 0 || hours === '0'){
        d.setHours(0)
    } else { 
        d.setHours(d.getHours() - hours);
    }
    console.log(d);

    DataPoint.find({
        "Date" : {"$gte": d}
    })
    .then(posts => res.json(posts))

    // DataPoint.find()
    // .then(posts => res.json(posts));
});

router.post('/', (req, res) => {
    const newDataPoint = new DataPoint({
        Temperature: 20,
        Humidity: 50,
        soil_moisture: 40,
        light: 60,
    });

    newDataPoint.save().then(datapoint => res.json(datapoint));
})

module.exports = router;