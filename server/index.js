
const express = require('express');
const cors = require('cors');
const path = require('path');
const needle = require('needle');
const cluster = require('cluster');
const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

if (!isDev && cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);
  
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });
  
  } else {
    const app = express();
  
    // Priority serve any static files.
    app.use(express.static(path.resolve(__dirname, '../client/build')));

    app.use(cors({origin: true, credentials: true}));
  
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
  
    // All remaining requests return the React app, so it can handle routing.
    app.get('*', function(request, response) {
      response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });
  
    app.listen(PORT, function () {
      console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
    });

  }

