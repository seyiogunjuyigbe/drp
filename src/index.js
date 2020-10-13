const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const startDb = require('./database/db');
const mongoose = require('mongoose');
const stream = require('./utils/stream');

const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const passport = require('passport');
const { PORT, SECRET_KEY } = require("./config/constants")
const port = PORT || 3000
const io = require("socket.io")(app.listen(port, () => console.log('Server listening on ' + port + " at " + new Date().toTimeString())));

// const passportConfig = require('./config/passport').passportConfig;
const userRoutes = require('./routes/userRoutes').userRoutes;
const bodyParser = require('body-parser');
const morgan = require("morgan")
// const nodemailer = require('nodemailer')
startDb();
// passportConfig();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')) // Redirect to the views directory inside the src directory
app.use(express.static(path.join(__dirname, '../public'))); // load local css and js files

app.use(morgan('dev'))
io.of('/stream').on('connection', stream);

app.use(require("express-session")({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    expires: new Date(Date.now() + (30 * 80000 * 1000)),
    cookie: {
        maxAge: 30 * 80000 * 1000
    }
})
);
const seedUsers = require("./utils/seedUsers");
seedUsers()
app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
})
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use("local", new LocalStrategy(User.authenticate()));
userRoutes(app);
// app.listen(port, process.env.IP, () => console.log('Listening on 3000'))