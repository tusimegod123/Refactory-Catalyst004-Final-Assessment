const express = require('express')
const server = express();
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const User = require('./models/userModels')
const userRoutes = require('./routes/userRoutes')

//to acess my public/css folder
server.use(express.static('public'))

server.use('/', userRoutes)
server.set('view engine', 'pug')
server.set(bodyParser.json())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017/asses", {useNewUrlParser: true, useUnifiedTopology: true}, 
function(err) {
   if (err) throw err
   console.log('Successfully connected')
}
)

server.get('*', (req, res)=>{
  res.send('error')
})

server.listen(3002, function() {
  console.log('listening on 3002')
})