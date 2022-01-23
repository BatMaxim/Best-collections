const { DataTypes } = require("sequelize");
const { database } = require("../Database");
const FieldsNames = require("./FieldsNames");

const BoolField = database.define(
    'boolfields',
    {
        value: {
            type: DataTypes.INTEGER("tiny"),
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

BoolField.belongsTo(FieldsNames);

module.exports = BoolField;