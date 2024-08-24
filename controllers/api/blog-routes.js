const router = require('express').Router();
const { json } = require('sequelize');
const {Blog} = require('../../models');

router.get('/home', async (req, res) => {
    try {
        const blogData = await Blog.findall(req.body, {
            attributes: {exclude: ['password']}
        });
        res.status(200).json(blogData)
    } catch (err) {
        res.status(500);json(err)
    }
});

