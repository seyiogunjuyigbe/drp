const userAuth = require('../controllers/userAuth');
const sermons = require('../middlewares/sermons');


exports.userRoutes = app =>{

    // Temp routes
    app.get('/success', (req,res)=>{
        return res.status(200).json({
            success: true,
            user: req.user
        })
    })

    app.get('/failure', (req,res)=>{
        return res.status(200).json({
            success: false,
            message: 'Try again'
        })
    })
    // 
    app.get('/sermons/live', sermons.getLiveVideos);
    app.post('/user/register', userAuth.registerUser);
    app.post('/user/login', userAuth.login, userAuth.logCb);
    app.post('/user/logout', userAuth.logoutUser);
}