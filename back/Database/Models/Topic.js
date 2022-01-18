const { DataTypes } = require("sequelize");
const { database } = require("../Database");

const Topic = database.define(
    'topic',
    {
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
)

module.exports = Topic;