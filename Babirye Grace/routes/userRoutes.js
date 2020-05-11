const express = require('express')
const router = express.Router()
const User = require('../models/userModels')
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'register.html'));
})

router.post('/adduser', async(req, res)=> {
try{
   var myData = new User(req.body)
   await myData.save()
   console.log('Item has been saved')
   res.redirect('/')

}
catch (error){
res.status(400).send("unable to save to database") 

}
})

//exporting the routers
module.exports = router 