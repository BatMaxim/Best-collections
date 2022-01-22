const { DataTypes } = require("sequelize");
const { database } = require("../Database");
const Collection = require("./Collection");

const FieldsNames = database.define(
    'fieldsnames',
    {
        name: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
        },
        collectionId: {
            type: DataTypes.INTEGER,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

FieldsNames.belongsTo(Collection);

module.exports = FieldsNames;