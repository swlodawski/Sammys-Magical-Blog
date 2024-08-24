const router = require('express').Router();
const {Blog} = require('../../models');

router.get('/home', async (req, res) => {
    try {
        const blogData = await Blog.findall(req.body, {
            attributes: {exclude: ['password']}
        });
        res.status(200).json(blogData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/dashboard', async (req, res) => {
    try {
        const {title, description} = req.body;
        if (!title || !description) {
            return res.status(400).json({message: 'Enter a title and description'});
        }
        const blogData = await Blog.create({
            title,
            description,
            userId: req.session.userId
        });
        res.status(200).json({post: blogData, message: 'Blog post createds successfully'});  
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;