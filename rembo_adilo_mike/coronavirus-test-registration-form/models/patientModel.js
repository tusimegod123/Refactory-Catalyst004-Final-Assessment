//schema and model definition
const mongoose = require('mongoose');

const Schema = mongoose.Schema();
const PatientSchema = new Schema({
    surName: String,
    givenName: String,
    dateofBirth: String,
    residence: String,
    occupation: String,
    nationality: String,
    gender: String, 
    category: String
})

//patient model
const Patient = mongoose.model('patient', PatientSchema);

module.exports = Patient;