const functions = require('firebase-functions');
const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const env = require('./src/config/constants');
const startDb = require('./src/database/db');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local');
const User = require('./src/models/user');
const passport = require('passport');
const passportConfig = require('./src/config/passport').passportConfig;
const userRoutes = require('./src/routes/userRoutes').userRoutes;
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
// startDb();
// passportConfig();
const port = process.env.PORT || 5000
const io = require("socket.io")(app.listen(port, () => console.log('Server listening on ' + port)));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views')) // Redirect to the views directory inside the src directory
app.use(express.static(path.join(__dirname, './public'))); // load local css and js files
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

app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
})
let broadcaster;
io.sockets.on("error", e => console.log(e));
io.sockets.on("connection", socket => {
    socket.on("broadcaster", () => {
        console.log('Broadcasting ' + socket.id)
        broadcaster = socket.id;
        socket.broadcast.emit("broadcaster");
    });
    socket.on("watcher", () => {
        console.log('Watching ' + socket.id)
        socket.to(broadcaster).emit("watcher", socket.id);
    });
    socket.on("offer", (id, message) => {
        socket.to(id).emit("offer", socket.id, message);
    });
    socket.on("answer", (id, message) => {
        console.log('Answer ' + socket.id)
        socket.to(id).emit("answer", socket.id, message);
    });
    socket.on("candidate", (id, message) => {
        socket.to(id).emit("candidate", socket.id, message);
    });
    socket.on("disconnect", () => {
        console.log('Disconnected ' + socket.id)
        socket.to(broadcaster).emit("disconnectPeer", socket.id);
        socket.disconnect()
    });
});
userRoutes(app);

exports.api = functions.https.onRequest(app);

