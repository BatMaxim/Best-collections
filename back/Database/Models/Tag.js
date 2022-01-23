const { DataTypes } = require("sequelize");
const { database } = require("../Database");

const Tag = database.define(
    'tag',
    {
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = Tag;