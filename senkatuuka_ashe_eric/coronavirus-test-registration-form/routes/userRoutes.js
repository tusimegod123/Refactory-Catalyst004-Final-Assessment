const express = require('express')
const router = express.Router()
const path = require('path');
//Import the model
//The model enables interaction to the database
const User = require('../models/userModel')

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'register.html'));
})

router.post("/", async (req, res) => {
    try {
        let user = new User(req.body);
        console.log(req.body);
        
       /*  if (items.downPayment === 850000) {
            items.vehicleType = 'Tuk Tuk'
            monthlyInstallment = 214590;
            downPayment = items.downPayment
        } else if (items.downPayment === 950000) {
            items.vehicleType = 'Boda Boda'
            monthlyInstallment = 294590;
            downPayment = items.downPayment
        } */

        await user.save()
        console.log("Registration was successful");
        

        res.redirect("/");
    } catch (error) {
        console.log(error);

        res.status(400).send("unable to save to database");
    }
});

//Export router
module.exports = router;