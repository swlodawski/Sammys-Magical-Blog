const User = require('../models/user')

const isLoggedIn = (req, res, next) => {
    if (req.session && req.session.loggedIn) {
        next();
    } else {
        res.redirect('/login');
    }
};

const isLoggedOut = async (req, res, next) => {
    if (!req.session || !req.session.loggedIn) {
        next();
    } else {
        req.redirect('/home');
    }
};

