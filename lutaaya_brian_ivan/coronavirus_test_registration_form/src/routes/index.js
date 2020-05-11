// Import the dependencies
const Router = require('express').Router;
const Patient = require('./../models/model');

// Create an instance of router
const routes = Router();

// a GET route at '/'
routes.get('/', (req, res) => {
  res.render('index');
});

// a POST route at '/'
routes.post('/', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await customer.save();

    // Define a response message on success
    const response = { message: 'Patient successfully registerd', type: 'success' };
    res.render('index', { response });
  } catch (error) {
    // Define a response message on failure
    const response = { message: 'Patient not registered', type: 'failure' };
    res.render('index', { response });
  }
});

// Redirect users to '/' if a route is undefined
// routes.get('*', (req, res) => {
//   res.redirect('/');
// });

module.exports = routes;
