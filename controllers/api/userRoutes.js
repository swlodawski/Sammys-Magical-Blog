const router = require('express').Router();
const {User, Blog} = require('../../models');

router.post('/', async (req, res) => {
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

router.post('/login', async (req, res) => {
try {
    const userData = await User.findOne({ where: {
        user_name: req.body.user_name
    }});
    if (!userData) {
        res.status(400).json({ message: 'The username or password was entered wrong. Please check again'});
        return;
    }

req.session.save(() => {
    req.session.user_id = userData.id;
    req.session.logged_in = true;
});
} catch (err) {
    res.status(400).json(err)
}
});

