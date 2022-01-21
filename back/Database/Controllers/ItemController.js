const Item = require("../Models/Item");
const Collection = require("../Models/Collection");
const {SelectAllItems} = require("../Database");
const Topic = require("../Models/Topic");


const getItems = async (collectionId) => {
    const items = await SelectAllItems(Item,{
        where:{
        collectionId: collectionId,
        },
        include: {
            model: Collection,
                required: true
        }});
    return items;
}

module.exports = { getItems };