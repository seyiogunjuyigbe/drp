const userAuth = require('../controllers/userAuth');
const sermons = require('../controllers/sermons');
const prayers = require('../controllers/prayer')
const message = require('../controllers/message');
const broadcastCtrl = require("../controllers/broadcast");
const { checkAuth } = require('../middlewares/auth');
exports.userRoutes = app => {
    app.get('/', (req, res) => { return res.status(200).render('index') })
    // Temp routes
    app.get('/success', (req, res) => {
        return res.status(200).json({
            success: true,
            user: req.user
        })
    })

    app.get('/failure', (req, res) => {
        return res.status(200).json({
            success: false,
            message: 'Try again'
        })
    })
    // 
    app.get("/broadcast", checkAuth, broadcastCtrl.goLiveWithWeb)
    app.get("/live-broadcast", broadcastCtrl.joinBroadcast);
    app.post("/stream", broadcastCtrl.startNewStream)
    app.post("/stream/:streamId", broadcastCtrl.stopLiveStream)
    app.get("/stream", broadcastCtrl.fetchCurrentStream)
    app.get('/sermons', sermons.getLiveVideos);
    app.get('/prayer', prayers.showPrayerForm);
    app.post('/prayer', prayers.sendPrayerRequest);
    app.get('/message', message.showMessageForm);
    app.post('/message', message.sendMessage);
    app.get('/auth/login', userAuth.renderLoginpage);
    app.post('/auth/login', userAuth.login);
    app.get('/auth/logout', userAuth.logout);
    app.all('*', (req, res) => { return res.status(404).render('404', { error: 'Error... page not found' }) })
}