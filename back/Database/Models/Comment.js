const { DataTypes } = require("sequelize");
const { database } = require("../Database");

const Comment = database.define(
    'comment',
    {
        message: {
            type: DataTypes.TEXT,
        },
        sender: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.DATE,
        },
        itemId: {
            type: DataTypes.INTEGER,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = Comment;