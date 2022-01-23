const { DataTypes } = require("sequelize");
const { database } = require("../Database");
const FieldsNames = require("./FieldsNames");

const IntField = database.define(
    'intfields',
    {
        value: {
            type: DataTypes.INTEGER,
        },
        fieldsnameId: {
            type: DataTypes.INTEGER,
        },
        itemId: {
            type: DataTypes.INTEGER,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

IntField.belongsTo(FieldsNames);

module.exports = IntField;