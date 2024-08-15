const User = require('./user');
const Blogs = require('./blog');

User.hasMany(Blogs, {
    foreignKey: 'user_id',
});

Blogs.hasOne(User, {
    foreignKey: 'user_id',
});

module.exports = {User, Blogs};