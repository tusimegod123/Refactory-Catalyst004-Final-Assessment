const express = require('express')
const router = express.Router()
const path = require('path');
//Import the model
//The model enables interaction to the database
// const Customer = require('../models/customerModel')

router.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname, '../views', 'register.html'));
  })

//Export router
module.exports = router;