//creating a router
const bands = require('express').Router;
//have all the models at once through the index file
const db = require('../models');
const { Band } = db

// FIND ALL BANDS
bands.get('/', async (req, res) => {
    try {
        const foundBands = await Band.findAll()
        res.status(200).json(foundBands)
    } catch (err) {
        res.status(500).json(err)
    }
})

//find a specific band
bands.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { band_id: req.params.id }
        })
        res.status(200).json(foundBand)
    } catch (err) {
        res.status(500).json(err)
    }
})

//create
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

//update bands
bands.get('/:id', (req, res) => {
    try {
        const updateBand = Band.update(req.body, {
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updateBand} band(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete bands
bands.delete('/:id', (req, res) => {
    try {
        const deleteBand = Band.destroy({
            where:{
                band_id: req.params.id
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