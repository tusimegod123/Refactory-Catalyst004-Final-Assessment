const express = require('express')
const router = express.Router();
//const Student = require('../models/studentModel')
const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../views', '/index.html'))
})


module.exports = router;
