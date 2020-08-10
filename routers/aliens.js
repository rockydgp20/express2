const express = require('express');
const router = express.Router();
const aliens = require('../model/alien')

//getting all data

router.get('/', async(req,res) => {
    try {
        const alienslis = await aliens.find();
        res.status(200).json(alienslis);
    }catch(err){
        res.status(400).json({message: err.message});

    }
});
// craeting new data

router.post('/', async(req,res) => {
    const alien = new aliens({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        const a1 = await alien.save();
        res.json(a1);
    } catch(err){
        res.status(500).json({
            message: err.message
        })

    }

});

// Update data

router.patch('/:id', async (req,res) => {

    try{
        const alien = await aliens.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)

    } 
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});
module.exports = router; 
