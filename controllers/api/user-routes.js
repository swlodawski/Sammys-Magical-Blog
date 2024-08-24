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

