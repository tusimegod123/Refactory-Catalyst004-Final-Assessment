//Import external modules
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./controllers/userRoutes')

//app defined middleware
server.use('/', userRoutes)


//Server connection
server.listen(3000, () => {
    console.log('listening on 3000');
})