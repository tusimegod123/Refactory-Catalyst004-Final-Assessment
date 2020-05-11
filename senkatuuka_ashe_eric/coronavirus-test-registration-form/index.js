//Require Packages
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
/* 

const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken'); */




//Initialize packages
const app = express();
app.set('view engine', 'pug')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
/* const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'movieratingapplicationsecretkey'; */

//Initialize middlewares
app.use('/', userRoutes);

/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize());

app.use('/users/login', userRoutes);

app.set('view engine', 'pug') */

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}



let db = process.env.MONGODB_URL;
if (db == null || db == "") {
    db = 'mongodb://localhost:27017/covid';
}

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB();


//Serve the apllication
app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})