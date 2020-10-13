const userAuth = require('../controllers/userAuth');
const sermons = require('../controllers/sermons');
const prayers = require('../controllers/prayer')
const message = require('../controllers/message');
const broadcastCtrl = require("../controllers/broadcast");
const { checkAuth } = require('../middlewares/auth');
exports.userRoutes = app => {
    app.get('/', (req, res) => { return res.status(200).render('index') })
    app.get("/broadcast", checkAuth, broadcastCtrl.goLiveWithWeb)
    app.get("/live", broadcastCtrl.joinBroadcast);
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
    app.get("/admin/dashboard", checkAuth, (req, res) => { res.render("dashboard", { user: req.user }) })
    app.all('*', (req, res) => { return res.status(404).render('404', { error: 'Error... page not found' }) })
}