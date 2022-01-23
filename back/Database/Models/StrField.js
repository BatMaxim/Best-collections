const { DataTypes } = require("sequelize");
const { database } = require("../Database");
const FieldsNames = require("./FieldsNames");

const StrField = database.define(
    'strfields',
    {
        value: {
            type: DataTypes.STRING,
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

StrField.belongsTo(FieldsNames);

module.exports = StrField;