const express = require('express');
const path = require('path');
const Patient = require('../models/patientModel');
const router = express.Router();

// LOGIN PAGE
router.get("/", (req, res) => {res.render('login');});

// REGISTER STUDENT
router.get("/addPatient", (req, res) => {res.render('registerPatient');});
router.post("/addPatient", async (req, res) => {
    try {
        var newPatient = new Patient(req.body);
        await newPatient.save();
        res.render("registerPatient", {surname-error.style.display = "block"})
        // const onePatient = {
        //     name:"",
        //     gender:"",
        //     age:"",
        //     country:"",
        //     residence:"",
        //     phoneNumber:"",
        //     email:""
        // };
        // // res.redirect('/profile');
        // let x = newStudent.surName + " " + newStudent.givenName; oneStudent.name = x;
        // x = newStudent.gender; oneStudent.gender = x;
        // x = newStudent.dob; oneStudent.age = x;
        // x = newStudent.country; oneStudent.country = x;
        // x = newStudent.residence; oneStudent.residence = x;
        // x = newStudent.phoneNumber; oneStudent.phoneNumber = x;
        // x = newStudent.email; oneStudent.email = x;
        // res.render('profile', {student: oneStudent});
    } catch {
        res.send("Unable to save to Database");
    }
});

// PROFILE PAGE
router.post("/profile", (req, res) => {

    res.render('profile');
});

// LOGOUT
router.post("/logout", (req, res) => {
    req.session.user;
    logout();
});

// HTML FILE BUILD & TEST ENDPOINT
router.get("/test", (req, res) => {res.sendFile(path.join(__dirname, '../views/html_files', 'patientRegistration.html'));});

module.exports = router;