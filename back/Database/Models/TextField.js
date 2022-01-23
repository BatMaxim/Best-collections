const { DataTypes } = require("sequelize");
const { database } = require("../Database");
const FieldsNames = require("./FieldsNames");

const TextField = database.define(
    'textfields',
    {
        value: {
            type: DataTypes.TEXT,
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

TextField.belongsTo(FieldsNames);

module.exports = TextField;