const { DataTypes } = require("sequelize");
const { database } = require("../Database");

const Topic = require("./Topic");

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

Collection.belongsTo(Topic);

module.exports = Collection;