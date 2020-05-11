// import all the dependencies
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

// Declare the constants
const PORT = 5000;

// Initialize the application
const app = express();

// Initialize the middlewares

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Template engine definition
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

// The endpoints
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`The server is listening on PORT ${PORT}`);
});
