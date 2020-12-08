
const express = require('express');
const app = express()
const subscribersModel = require('.//models/subscribers');




// Your code goes here

app.get('/subscribers', async(req, res) => {
    res.send(await subscribersModel.find())
})



app.get('/subscribers/names', async(req, res) => {
    const projectResult = await subscribersModel.find().select({
        _id:false,
        name:true,
        subscribedChannel:true,

    })
    res.send(projectResult);
})



app.get('/subscribers/:id', async(req, res) => {
    const id = req.params.id
    try{
        const doc = await subscribersModel.findOne({_id: id})
        if(doc == null){
            res.status(400).send({message: "Id not found"})
        }
        else{
            res.status(200).send(doc);
        }
    }
    catch (err){
        res.status(400).send({message: err.message});
    }
    
})

















module.exports = app;
