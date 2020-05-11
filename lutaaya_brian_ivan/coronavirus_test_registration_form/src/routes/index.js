// Import the dependencies
const Router = require('express').Router;

const routes = Router();

// a GET route at '/'
routes.get('/', (req, res) => {
  res.render('index');
});

module.exports = routes;
