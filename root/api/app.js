const express = require('express');
const dbURI = 'mongodb+srv://joseph:rner6uicLiC7EZ1F@cluster0.0kahd.mongodb.net/FourCrowd?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const Score = require('./models/Score');
var cors = require('cors');
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

const app = express();


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 
app.use(cors());
app.use((req, res, next) => {
    console.log('new request made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
})

app.post('/api/scores', (req, res) => {
    console.log('received post request');
    console.log(req.body);
    const score = new Score({
        username: req.body["username"],
        score: req.body["score"]
    })
    score.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/api/scores', (req, res) => {
    console.log('score request');
    const score = new Score({
        username: 'jjj',
        score: 123
    })

    score.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
        

});