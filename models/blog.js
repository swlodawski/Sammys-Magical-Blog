const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const {types} = require('pg');

class Blog extends Model {}

Blog.init (
    {id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    blog_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    blog_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    blog_poster: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.TIME,
        allowNull: false,
    },
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    tableName: 'Blog'
});

module.exports = Blog;