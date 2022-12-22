//creating a router
const stages = require('express').Router();
//have all the models at once through the index file
const db = require('../models');
const { Stage, Event, StageEvent } = db

// find all stages
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})


//find a specific stage
stages.get('/:name', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { name: req.params.name },
            include: {
                model: Event,
                as: "events",
                //as a many to many, must have the junction table somewhere.
                through: StageEvent
            }
        })
        res.status(200).json(foundStage)
    } catch (err) {
        res.status(500).json(err)
    }
})

//create a stage
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

// update a stage
stages.put('/:name', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                name: req.params.name
            }
        }
        )
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})


//delete stages
stages.delete('/:name', async (req, res) => {
    try {
        const deleteStage = await Stage.destroy({
            where: {
                name: req.params.name
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deleteStage} stage(s)`
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = stages