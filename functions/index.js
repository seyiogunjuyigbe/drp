const functions = require('firebase-functions');
const express = require('express');
const app = express();
const path = require('path');
const startDb = require('./src/database/db');
const User = require('./src/models/user');
const passport = require('passport');
const userRoutes = require('./src/routes/userRoutes').userRoutes;
const bodyParser = require('body-parser');
const stream = require('./src/utils/stream');
const { registerAdmin } = require('./src/controllers/userAuth');
const port = process.env.PORT || 5000
const io = require("socket.io")(app.listen(port, () => console.log('Server listening on ' + port + " at " + new Date().toTimeString())));
const { SECRET_KEY } = require("./env.json")
const LocalStrategy = require('passport-local').Strategy
const passportLocalMongoose = require('passport-local-mongoose');
startDb();
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});
app.use(passport.initialize());
app.use(passport.session())
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use("local", new LocalStrategy(User.authenticate()));

// registerAdmin("Seyi", "Mike", "seyiogunjuyigbe@gmail.com", "seyimike")
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views')) // Redirect to the views directory inside the src directory
app.use(express.static(path.join(__dirname, './public'))); // load local css and js files

io.of('/stream').on('connection', stream);

userRoutes(app);

exports.api = functions.https.onRequest(app);

