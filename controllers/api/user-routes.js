const router = require('express').Router();
const { json } = require('sequelize');
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

