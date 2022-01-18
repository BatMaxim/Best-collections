const Collection = require("../Models/Collection");
const {SelectAllItems} = require("../Models/Database");

const getAllCollections = async (params) => {
    const collecions = await SelectAllItems(Collection);
    console.log(collecions);
}

getAllCollections();