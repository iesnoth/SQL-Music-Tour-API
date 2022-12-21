//creating a router
const stages = require('express').Router();
//const { Op } = require('sequelize')
//have all the models at once through the index file
const db = require('../models');
const { Stage } = db

// FIND ALL BANDS
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})


//find a specific stage
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (err) {
        res.status(500).json(err)
    }
})

//create
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted new stage',
            data: newStage
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE A stage
stages.put('/:id', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        }
        )
        res.status(200).json({
            message: `Successfully updated ${updatedStages} band(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


// //delete bands
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

module.exports = stages