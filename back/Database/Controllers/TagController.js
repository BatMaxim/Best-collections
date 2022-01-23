const Tag = require("../Models/Tag");
const {SelectAllItems} = require("../Database");


const getTags = async (collectionId) => {
    const tags = await SelectAllItems(Tag);
    return tags;
}

module.exports = { getTags };