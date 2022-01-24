const TagItem = require("../Models/TagItem");
const {SelectAllItems, InsertItems} = require("../Database");

const AddTagsItems = async (params) => {
    const tags = await InsertItems(TagItem, params);
    return tags;
}

module.exports = { AddTagsItems};