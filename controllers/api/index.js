const router = require('express').Router();
const {User, Blog} = require('../../models');

router.post('/', async(req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async(req, res) => {
    try {
        const userData = await User.findAll({ where: {
        user_name:
        req.body.user_name}});

    if(!userData) {
        res
        .status(400).json({ message: 'Please make sure you entered the correct login information'});
        return;
    }

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.json({ user: userData, message: 'You are logged in'});
    });
} catch (err) {
    res.status(400).json(err)
}
    });

router.post('/logout', async(req, res) => {
    if(req.session.logged_in) {
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(404).end();
    }
});

router.get('/', async(req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});




