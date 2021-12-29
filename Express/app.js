const express = require('express');
const app = express();
const port = 80;

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.send('This is my home page with asif')
});
app.status(200).get('/about', (req, res) => {
    res.send('Thisis my about page with asif')
});
app.status(404).get('/this', (req, res) => {
    res.send('This page is not found');
});
app.post('/about', (req, res) => {
    res.send('Thisis my post request about page with asif')
});

app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
});