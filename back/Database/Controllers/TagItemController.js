const TagItem = require("../Models/TagItem");
const {SelectAllItems, InsertItems} = require("../Database");
const Tag = require("../Models/Tag");

const getTagsItems = async (id) => {
    const params = {
        where: {
            itemId: id
        },
        include: {
            model: Tag,
            required: true
        }
    }

    const tags = await SelectAllItems(TagItem, params);
    return tags;
}

const AddTagsItems = async (params) => {
    const tags = await InsertItems(TagItem, params);
    return tags;
}

module.exports = { AddTagsItems, getTagsItems};