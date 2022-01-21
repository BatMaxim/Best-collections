const { DataTypes } = require("sequelize");
const { database } = require("../Database");
const Collection = require("./Collection");

const Item = database.define(
    'item',
    {
        name: {
            type: DataTypes.STRING,
        },
        collectionId: {
            type: DataTypes.INTEGER,
        },
    },
    {
        timestamps: false,
    }
);

Item.belongsTo(Collection);

module.exports = Item;