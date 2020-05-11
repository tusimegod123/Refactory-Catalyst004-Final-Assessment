const express = require('express');
const router = express.Router();
const path = require('path');

//patient input request route
router.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'form.html'));
})

//create new patient route
router.post('/addpatient', async(req, res) => {
    try {
        
    } catch (error) {
        res.status(400).send("unable to save to database")
    }
})

//retrieve all patients


//retrieve single patient


//delete patient


//update patient details

module.exports = router;