const Tag = require("../Models/Tag");
const {SelectAllItems, InsertItems} = require("../Database");
const StrField = require("../Models/StrField");


const getTags = async (collectionId) => {
    const tags = await SelectAllItems(Tag);
    return tags;
}


const AddTags = async (params) => {
    const tags = await InsertItems(Tag, params);
    return tags;
}


module.exports = { getTags, AddTags};