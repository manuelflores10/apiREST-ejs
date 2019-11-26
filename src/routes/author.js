const express = require('express');
const app = express.Router();
const Author = require('../model/author');

app.get('/', async (req, res) =>{
    const authors = await Author.find()
    res.render('author',{
        authors
    })
})

app.post('/add', async (req, res, next) => {
    const author = new Author(req.body);
    await author.save();
    res.redirect('/author');
})

app.get('/edit/:id', async (req, res, next) => {
    const author = await Author.findById(req.params.id);
    res.render('authorEdit', { author });
    res.redirect('/author');
})

app.post('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    await Author.update({_id: id}, req.body);
    res.redirect('/author');
    });

app.get('/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Author.remove({_id: id});
    res.redirect('/author');
    });

    var moment = require('moment');
    exports.index = function(req, res) {
        res.render('index', { moment: moment });
    }
module.exports = app;