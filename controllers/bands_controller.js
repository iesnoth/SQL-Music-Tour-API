//creating a router
const bands = require('express').Router();
const { Op } = require('sequelize')
//have all the models at once through the index file
const db = require('../models');
const { Band, MeetGreet, Event, SetTime } = db

// find all bands
//TO QUERY THE BAND NAMES type them with '-' between each word
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll({
            order: [['band_name', 'ASC']],
            //query as http://localhost:3000/bands?band_name=bandname
            where: {
                band_name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundBands)
    } catch (error) {
        res.status(500).json(error)
    }
})


//find a specific band
bands.get('/:name', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { band_name: req.params.name },
            //pulling in the foreign keys through eager queries
            include: [
                {
                    model: MeetGreet,
                    as: "meet_greets",
                    include: {
                        model: Event,
                        as: "event",
                        where: { city: { [Op.like]: `%${req.query.event ? req.query.event : ''}` } }
                    }
                },
                {
                    model: SetTime,
                    as: "set_times",
                    include: { model: Event, as: "event" }
                }
            ]
        })
        res.status(200).json(foundBand)
    } catch (err) {
        res.status(500).json(err)
    }
})

//create bands
bands.post('/', async (req, res) => {
    try {
        //this method accepts an object as its argument that specifies
        //which columns and values to create. We can assume anyone using
        //this route will send back a request body with that information.
        //Therefore we can pass in the req.body as the argument.
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted new band',
            data: newBand
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// update bands
bands.put('/:name', async (req, res) => {
    try {
        const updatedBands = await Band.update(req.body, {
            where: {
                band_name: req.params.name
            }
        }
        )
        res.status(200).json({
            message: `Successfully updated ${updatedBands} band(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


//delete bands
bands.delete('/:name', async (req, res) => {
    try {
        const deleteBand = await Band.destroy({
            where: {
                band_name: req.params.name
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deleteBand} band(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = bands