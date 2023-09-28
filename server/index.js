const express = require('express');

const app = express();

const bodyParser = require('bodyParser')

app.use(bodyParser.json());

const PORT = 3000;
const HOSTNAME = ('localhost');

app.get('/', (req, res) => {
    res.json('Welcome to men & women Dummy Data')
})

app.get('/men', (req, res) => {
    res.send('send  10 product data to men')
})

app.get('/women', (req, res) => {
    res.send('send  10 product data to women')
})

app.get('/other', (req, res) => {
    res.send('send response as page not found')
})

app.listen(PORT, () => {
    console.log(`SERVER is running at ${HOSTNAME}:${PORT}`);
})


