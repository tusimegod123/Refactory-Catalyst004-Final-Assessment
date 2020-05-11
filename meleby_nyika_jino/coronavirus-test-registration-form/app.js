const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const formRoutes = require('./routes/formRoutes')
//const path = require('path')
const server = express()
server.use(express.static('public'))
server.set('view engine','pug')   

//http parsing middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/', formRoutes)

//connect to the database
mongoose.connect('mongodb://localhost:27017/covid19', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) throw err;
    console.log('Successfully Connected');
    server.listen(5001, () => {
        console.log('Listening on 5001')         
    })
});


