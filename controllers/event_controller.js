//creating a router
const events = require('express').Router();
//have all the models at once through the index file
const db = require('../models');
const { Event, MeetGreet, Stage, Band, SetTime } = db

// find all events
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll()
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})


//find a specific event
//NOT WORKING
events.get('/:event', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { city: req.params.event },
            //meet and greets
            include: [
                {
                    model: MeetGreet,
                    as: "meet_greets",
                    include: {
                        model: Band,
                        as: "band"
                    }
                },
                //stages
                {
                    model: Stage,
                    as: "stages",
                    include: {
                        model: SetTime,
                        as: "set_times"
                    }
                }
            ]
        })
        res.status(200).json(foundEvent)
    } catch (err) {
        res.status(500).json(err)
    }
})

//create events
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

// update events
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