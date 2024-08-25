const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init (
    {id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    poster: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    tableName: 'Blog'
});

module.exports = Blog;