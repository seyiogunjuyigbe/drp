const User = require('../models/user');
module.exports = {
    registerAdmin(firstName, lastName, email, username, password) {
        let thisUser = new User({
            firstName,
            lastName,
            email,
            username,
            role: "superAdmin"
        });
        User.register(thisUser, password, function (err, user) {
            if (err) {
                console.log({
                    success: false,
                    error: err.message
                })
            } else {
                console.log(thisUser.username + " seeded")
            }
        })
    },
    async renderLoginpage(req, res) {
        if (req.user) return res.redirect('/admin/dashboard')
        else {
            return res.render("login", { redirect: req.query.redirect, err: null })

        }
    },
    async login(req, res) {
        if (req.user) return res.redirect('/admin/dashboard')
        try {
            const { username, email, password, redirect } = req.body;
            if (!password) return res.status(400).render('login', { err: 'Password required', redirect });

            const user = await User.findOne({ $or: [{ email }, { username }] });

            if (!user) return res.status(401).render('login', { err: 'Incorrect username or password', redirect });

            //validate password
            else {
                if (password) {
                    user.authenticate(password, (err, found, passwordErr) => {
                        if (err) {
                            return res.status(500).render('login', { err: err.message, redirect });
                        } else if (passwordErr) {
                            return res.status(401).render('login', { err: 'Incorrect username or password', redirect });
                        } else if (found) {
                            req.login(user, function (err) {
                                if (err) {
                                    return res.status(500).render('login', { err: err.message, redirect });
                                }
                                else {
                                    if (redirect) return res.status(200).redirect(redirect)
                                    else return res.status(200).redirect('/admin/dashboard')
                                }
                            });
                        }
                    })
                }
            }
        } catch (error) {
            return res.status(500).render('login', { err: error.message, redirect });
        }
    },

    // @route POST api/auth/login
    // @access Public
    async logout(req, res) {
        try {
            req.session.destroy()
            req.logout();
            return res.status(200).redirect('/auth/login')

        }
        catch (error) {
            return res.status(500).render('error', { err: error.message });
        }
    },

    // Check if user is logged in
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect("/user/login");
    },

    // Check if user is logged in and is admin
    isLoggedInAndAdmin(req, res, next) {
        if (req.isAuthenticated()) {
            if (req.user.role == "admin") {
                return next();
            } else {
                res.status(401).json({
                    error: 'You are unauthorized to access this route'
                })
            }
            res.redirect("/user/login")
        }
    },

    // Check if user is logged in and is Superadmin
    isLoggedInAndSuperAdmin(req, res, next) {
        if (req.isAuthenticated()) {
            if (req.user.role == "superAdmin") {
                return next();
            } else {
                res.status(401).json({
                    error: 'You are unauthorized to access this route'
                })
            }
            res.redirect("/user/login")
        }
    }
}