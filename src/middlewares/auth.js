module.exports = {
    checkAuth(req, res, next) {
        if (!req.user) {
            console.log({ session: req.session, u: req.user, l: res.locals })
            return res.status(200).redirect('/auth/login?redirect=' + req.originalUrl);
        }
        else {
            next()
        };
    },
}