const mongoose = require("mongoose")

var nameSchema = new mongoose.Schema({
  surname: String,
  givenname: String,
  dateOfBirth: Date,
  placeOfResidence: String,
  occupation: String,
  nationality: String,
  category: String
   
 })

var User = mongoose.model("User", nameSchema)

module.exports = mongoose.model("User",nameSchema)