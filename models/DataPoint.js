const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataPointSchema = new Schema({
    Temperature: Number,
    Light: Number,
    Soil_Moisture: Number,
    Humidity: Number,
    Date: {
        type: Date,
        default: Date.now
    }
    },
    {
        collection: 'bedroom'
    });

module.exports = DataPoint = mongoose.model('posts', DataPointSchema);