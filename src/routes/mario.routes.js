const router = require('express').Router();
const MarioModel = require('../models/marioChar')
router.post('/mario', async (req, res) => {
    if (!req.body.name || !req.body.weight) {
        res.status(400).send({ message: 'either name or weight is missing' });
        return;
    }
    const marioModel = new MarioModel(req.body);
    try {
        const val = await marioModel.save();
        res.status(201).send(val);
    } catch (err) {
        res.status(500).send(err.message);
    }
})
router.get('/mario', async (req, res) => {
    try {
        const charecters = await MarioModel.find();
        res.status(201).send(charecters);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})
router.get('/mario/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const charecters = await MarioModel.findOne({ "_id": id });
        res.status(201).send(charecters);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})
router.patch('/mario/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const charecters = await MarioModel.findOne({ "_id": id });
        if (!charecters) {
            res.status(400).send({ message: error.message });
            return;
        }
        else {
            if (!req.body.name || !req.body.weight) {
                res.status(400).send({ message: 'either name or weight is missing' });
                return;
            }
            const updatedData = await MarioModel.updateOne({"_id" : id} , req.body);
            res.status(201).send(updatedData);
        }
    }
    catch (err) {
        res.status(500).send(err.message);
    }
})
router.delete('/mario/:id' , async (req , res) =>{
    const id = req.params.id;
    try{
        const charecter = await MarioModel.findOne({"_id" : id});
        if(!charecter){
            res.status(400).send({message : "Charecter not found"});
            return;
        }
        else{
            await MarioModel.deleteOne({"_id" : id});
            res.status(201).send({messaga : "character deleted"})
        }
    }catch(err){
        res.status(500).send(err.message);
    }

})

module.exports = router;