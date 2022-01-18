const Collection = require("../Models/Collection");
const Topic = require("../Models/Topic");
const {SelectAllItems} = require("../Database");

const getCollections = async () => {
    const params = {
        include: {
        model: Topic,
        required: true
    }}
    const collecions = await SelectAllItems(Collection, params);
    return collecions;
}

module.exports = { getCollections };