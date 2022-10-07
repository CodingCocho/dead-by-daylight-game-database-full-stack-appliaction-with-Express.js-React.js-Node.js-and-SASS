
const express = require('express');
const cors = require('cors');
const path = require('path');
const needle = require('needle');
const app = express()

app.use(cors({origin: true, credentials: true}));

// app.use(express.static(__dirname + '/images'));

app.use(express.static(path.join(__dirname + "/build")));


app.get('/home', (req, res) =>
{
    res.redirect('/home');
})

app.get('/survivors', (req, res) =>
{
    res.redirect('/');
})

app.get('/killers', (req, res) =>
{
    res.redirect('/');
})

app.get('/survivors/:survivorId', (req, res) =>
{
    res.redirect('/');
})

app.get('/killers/:killerId', (req, res) =>
{
    res.redirect('/');
})

app.get('/api/survivors',  async (req, res) =>
{
    try
    {
        const response = await needle('get', 'https://dead-by-api.herokuapp.com/api/survs')
        const data = response.body;
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({error})
    }
})

app.get('/api/killers',  async (req, res) =>
{
    try
    {
        const response = await needle('get', 'https://dead-by-api.herokuapp.com/api/killers')
        const data = response.body;
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({error})
    }
})

app.get('/api/survivors/perks',  async (req, res) =>
{
    try
    {
        const response = await needle('get', 'https://dead-by-api.herokuapp.com/api/perks/surv')
        const data = response.body;
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({error})
    }
})
app.get('/api/killers/perks',  async (req, res) =>
{
    try
    {
        const response = await needle('get', 'https://dead-by-api.herokuapp.com/api/perks/killer')
        const data = response.body;
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({error})
    }
})
    
app.listen(8080, () =>
{
    console.log("Server started on port 8080")
})

module.exports = app;