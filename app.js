// Imports
const express = require('express')
const mongoose = require('mongoose')

// App initialisation
const app = express()

// Routers
const recommendation = require('./routes/recommendationsRoute');
const profile = require('./routes/userDataRoute')


// Middlewares
app.use('/', recommendation);
app.use('/', profile)


app.listen(8080, ()=> {
    console.log(`Server running at localhost:${8080}`)
})