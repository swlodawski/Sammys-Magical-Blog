const router = require('express').Router();
const {User} = require('../../models');

router.get('/', (req, res) => {
    res.render('login', {
        layout: 'main',
        currentPath: req.path
    });
})

router.post('/', async(req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(200).json({message: 'User Created Successfully'})
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: {exclude: ['password']}
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body;

        if(!username || !password) {
            res.status(400).json({message: 'The username and password do not match a registered user. Please reenter'});
    }

        req.session.save(() => {
        res.session.userId = userData.id;
        req.session.loggedin = true;

      const {password: _, ...userWithoutPassword} = userData.get({plain: true});
            res.status(200).json({user: userWithoutPassword, message: 'You are logged in'});
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;