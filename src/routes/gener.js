const express = require('express');
const app = express.Router();
const Gener = require('../model/gener');

app.get('/', async (req, res) =>{
    const geners = await Gener.find()
    res.render('gener',{
        geners
    })
})

app.post('/add', async (req, res, next) => {
    const gener = new Gener(req.body);
    await gener.save();
    res.redirect('/gener');
})

app.get('/edit/:id', async (req, res, next) => {
    const gener = await Gener.findById(req.params.id);
    res.render('generEdit', { gener });
    res.redirect('/gener');
})

app.post('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    await Gener.update({_id: id}, req.body);
    res.redirect('/gener');
})


app.get('/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Gener.remove({_id: id});
    res.redirect('/gener');
})

module.exports = app;