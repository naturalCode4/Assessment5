require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed, getCountries, getCities, createCity, deleteCity} = require('./controller.js')

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log('request received for:', req.method, req.originalUrl)
    next()
})

// DEV
// app.post('/seed', seed)
app.post('/seed', seed)


// COUNTRIES
app.get('/countries', getCountries)

// CITIES
app.post('/cities', createCity)
app.get('/cities', getCities)
app.delete('/cities/:id', deleteCity)

console.log('hello')
app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))