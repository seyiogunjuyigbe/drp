const userAuth = require('../controllers/userAuth');
const sermons = require('../middlewares/sermons');
const prayers = require('../controllers/prayer')
const message = require('../controllers/message')
exports.userRoutes = app =>{
    app.get('/', (req,res)=>{return res.status(200).render('index')})
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
    app.get('/sermons', sermons.getLiveVideos);
    app.get('/prayer', prayers.showPrayerForm);
    app.post('/prayer', prayers.sendPrayerRequest);
    app.get('/message', message.showMessageForm);
    app.post('/message', message.sendMessage);
    app.post('/user/register', userAuth.registerUser);
    app.post('/user/login', userAuth.login, userAuth.logCb);
    app.post('/user/logout', userAuth.logoutUser);
    app.all('*', (req,res)=>{return res.status(404).render('404',{error: 'Error... page not found'})})
}