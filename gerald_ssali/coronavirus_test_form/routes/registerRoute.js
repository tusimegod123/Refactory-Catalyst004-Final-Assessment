const express = require('express')
const router = express.Router()
const Patient = require('../models/registerModel')


// registration form route



// save to database route
router.post('/', async (req, res) => {
   try {
      const patient = new Patient(req.body)
      // console.log(patient)
      await patient.save()
   } catch (error) {
      console.log(error)
      res.status(400, 'Unable to save to database')
   }
})

// export for external use
module.exports = router;