// Imports
const express = require('express')
const mongoose = require('mongoose')

// App initialisation
const app = express()

// Routers
const awsRoute = require('./routes/awsRoute');


// Middlewares
app.use('/', awsRoute);


app.listen(8080, ()=> {
    console.log(`Server running at localhost:${8080}`)
})