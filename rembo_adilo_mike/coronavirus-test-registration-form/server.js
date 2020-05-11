//Import external modules
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const userRoutes = require('./controllers/userRoutes')



//setting static file access
server.use(express.static(path.join(__dirname, 'public')));

//app defined middleware
server.use('/', userRoutes)


//Server connection
server.listen(3000, () => {
    console.log('listening on 3000');
})