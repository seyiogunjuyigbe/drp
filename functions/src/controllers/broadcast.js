module.exports = {
    async goLiveWithWeb(req, res) {
        return res.status(200).render('broadcast')
    },
    async watchLiveBroadcast(req, res) {
        return res.status(200).render('watch')
    }
}