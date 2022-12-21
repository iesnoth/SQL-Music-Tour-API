//creating a router
const events = require('express').Router();
//const { Op } = require('sequelize')
//have all the models at once through the index file
const db = require('../models');
const { Event } = db

// FIND ALL BANDS
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll()
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})


//find a specific band
events.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (err) {
        res.status(500).json(err)
    }
})

//create
events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted new event',
            data: newEvent
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE events
//THIS WORKS BUT THE BAND ONE DOESN'T
events.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await Event.update(req.body, {
            where: {
                event_id: req.params.id
            }
        }
        )
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} events(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


// //delete bands
// //this works, but the Band.destroy is returning a promise because of the await.
// //I've fixed this before by calling the function outside the async/await, but I don't
// //know if that will fly here.
// //this might be why the update isn't working
// bands.delete('/:id', async (req, res) => {
//     try {
//         const deleteBand = await Band.destroy({
//             where: {
//                 band_id: req.params.id
//             }
//         })
//         res.status(200).json({
//             message: `Successfully deleted ${deleteBand} band(s)`
//         })
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

module.exports = events