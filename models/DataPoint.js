const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataPointSchema = new Schema({
    temperature: Number,
    humidity: Number,
    soil_temperature: Number,
    soil_moisture: Number,
    light: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = DataPoint = mongoose.model('datapoint', DataPointSchema);