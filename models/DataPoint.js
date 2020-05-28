const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataPointSchema = new Schema({
    Temperature: Number,
    Light: Number,
    Soil_moisture: Number,
    Humidity: Number,
    Date: {
        type: Date,
        default: Date.now
    }
    },
    {
        collection: 'posts'
    });

module.exports = DataPoint = mongoose.model('posts', DataPointSchema);