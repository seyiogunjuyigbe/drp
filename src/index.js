const express = require ('express');
const app = express();
const axios = require('axios');
const path = require('path');
const env = require('./config/constants');
const startDb = require('./database/db');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const passport = require('passport');
const passportConfig = require('./config/passport').passportConfig;
const userRoutes = require('./routes/userRoutes').userRoutes;
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
// startDb();
// passportConfig();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')) // Redirect to the views directory inside the src directory
app.use(express.static(path.join(__dirname, '../public'))); // load local css and js files
app.use(passport.initialize());
app.use(passport.session());
passport.use("local", new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(require("express-session")({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false, 
    expires: new Date(Date.now() + (30 * 86400 * 1000))
}));

app.use(function(req, res, next){
    res.locals.user = req.user;
    next();
})
userRoutes(app);
const port = process.env.PORT || 3000
app.listen(port, process.env.IP, ()=>console.log('Listening on 3000'))