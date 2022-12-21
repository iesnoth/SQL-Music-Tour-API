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


//delete events
events.delete('/:id', async (req, res) => {
    try {
        const deleteEvent = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deleteEvent} event(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = events