const passport = require("passport");
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const SECRET_KEY = process.env.SECRET_KEY
const User = require ("../models/user")
const app = require('express')();
exports.passportConfig = () =>{


}
