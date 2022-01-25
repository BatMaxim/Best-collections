const Item = require("../Models/Item");
const Collection = require("../Models/Collection");
const {SelectAllItems, InsertItem, DeleteItem, SelectItem, UpdateItem} = require("../Database");


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

const getItem = async (id) => {
    const item = await SelectItem(Item,{
        where:{
            id: id,
        },
        include: {
            model: Collection,
            required: true
        }});
    return item;
}

const addItem = async (params) => {
    const item = await InsertItem(Item, params);
    return item;
}

const updateItem = async (newValues, params) => {
    const item = await UpdateItem(Item, newValues, params);
    return item;
}

const deleteItem = async (params) => {
    const item = await DeleteItem(Item, params);
    return item;
}

module.exports = { getItems, addItem, deleteItem, getItem , updateItem };