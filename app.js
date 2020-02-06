const express = require('express');

const app = express();
const routes = require('./routes');

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res, next) {
  res.send('Welcome to Dogs and Humans! Check out our lovely routes.');
});

app.use('/api', routes);

// custom error handling
app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

module.exports = app;
