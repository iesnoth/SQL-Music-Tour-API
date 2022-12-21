// DEPENDENCIES
const express = require('express')
const app = express()
//requiring Sequelize, which comes with its own class
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//SEQUELIZE CONNECTION (removed after installing CLI)
//database has to be created first before connecting: unlike
//Mongoose, it won't create a new one for me
// const sequelize = new Sequelize(process.env.PG_URI)

// //authenticate is a built in Sequelize method, will run whenever a server
// //initially starts
// try{
//     sequelize.authenticate()
//     console.log(`Connected to Sequelize at ${process.env.PG_URI}`)
// }catch(err){
//     console.log(`Unable to connect to PG:${err}`)
// }

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS 
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

const eventsController = require('./controllers/event_controller')
app.use('/events', eventsController)

const stagesController = require('./controllers/stage_controller')
app.use('/stages', stagesController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Rockin' on port: ${process.env.PORT}`)
})