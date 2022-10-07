import axios from 'axios';
import express from 'express';
import cors from 'cors';
let app = express()

app.use(cors({origin: true, credentials: true}));

app.use(express.static('./build'));

app.get('/survivors',  async (req, res) =>
{
    const survivors = await axios.get('http://dead-by-api.herokuapp.com/api/survs')
        .then(response => res.json(response.data.data))
        .catch(err => err)
    
})
    

app.listen(8080, () =>
{
    console.log("Server started on port 8080")
})

module.exports = app;