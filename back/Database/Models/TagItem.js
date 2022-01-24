const { DataTypes } = require("sequelize");
const { database } = require("../Database");
const Item = require("./Item");
const Tag = require("./Tag");

const TagItem = database.define(
    'tagsitems',
    {
        tagId: {
            type: DataTypes.STRING,
        },
        itemId: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);
TagItem.belongsTo(Item);
TagItem.belongsTo(Tag);

module.exports = TagItem;