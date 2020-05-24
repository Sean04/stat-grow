const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const data = require('./routes/api/data');

const app = express();

const test_data = {
    temperature: 20,
    humidity: 50,
    moisture: 30,
    light: 60,
    soil_temperature: 20,
    time: 1,
}

// Database config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Allow requests from the same host
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use('/api/data', data);

app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
});


app.get('/api/test_data', (req, res) => {
    res.json(test_data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`Server started on port ${PORT}`));
