const User = require('../models/user');
const passport = require('passport');
const passportConfig = require('../config/passport').passportConfig;
passportConfig();
exports.registerUser = (req,res)=>{
    let thisUser = new User({...req.body});
    User.register(thisUser, req.body.password, function(err,user){
    if(err){
        return res.status(500).json({
            success: false,
            error: err.message
        })
    }
        passport.authenticate("local")(req, res, function(){
            return res.status(200).json({
                success: true,
                data: user
            })
           })
})
}

exports.login = passport.authenticate("local", {successRedirect:'/success',failureRedirect: "/failure"})
// res.json({
//     body: req.body
// })

exports.logCb = (req,res)=>{

}
//logout Middleware
exports.logoutUser = (req,res)=>{
    req.logout();
    res.redirect("/user/login");
}

// Check if user is logged in
exports.isLoggedIn = (req,res,next)=>{
            if(req.isAuthenticated()){
            return next();
        }
        res.redirect("/user/login");
        }
        
// Check if user is logged in and is admin
exports.isLoggedInAndAdmin = (req,res,next)=>{
    if(req.isAuthenticated()){
        if(req.user.role == "admin"){
            return next();
        } else{
            res.status(401).json({
                error: 'You are unauthorized to access this route'
            })
        } 
        res.redirect("/user/login")
        }
        }

// Check if user is logged in and is Superadmin
exports.isLoggedInAndSuperAdmin = (req,res,next)=>{
    if(req.isAuthenticated()){
        if(req.user.role == "superAdmin"){
            return next();
        } else{
            res.status(401).json({
                error: 'You are unauthorized to access this route'
            })
        } 
        res.redirect("/user/login")
        }
        }