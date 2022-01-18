const { DataTypes } = require("sequelize");
const { database } = require("./Database");

const Collection = database.define(
    'collection',
    {
        name: {
            type: DataTypes.STRING,
        },
        authorId: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        topicId: {
            type: DataTypes.INTEGER,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = Collection;