const Collection = require("../Models/Collection");
const Topic = require("../Models/Topic");
const {SelectAllItems, SelectItem} = require("../Database");

const getCollections = async (customParams) => {
    const params = {
        customParams,
        include: {
        model: Topic,
        required: true
    }}
    const collecions = await SelectAllItems(Collection, params);
    return collecions;
}

const getCollection = async (id) => {
    const params = {
        where:{
            id: id,
        },
        include: {
            model: Topic,
            required: true
        }}
    const collecions = await SelectItem(Collection, params);
    return collecions;
}

module.exports = { getCollections, getCollection };