// Imports
const express = require('express')
const mongoose = require('mongoose')

// App initialisation
const app = express()

// Routers
const recommendation = require('./routes/recommendationsRoute');
const profile = require('./routes/profilesRoute')


// Middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/', recommendation);
app.use('/', profile)


mongoose.connect('mongodb://localhost:27017')
    .then(res => app.listen(8080), console.log('Databse Connected'))
    .catch(err => console.log(err))