const Collection = require("../Models/Collection");
const Topic = require("../Models/Topic");
const {SelectAllItems} = require("../Models/Database");

const getAllCollections = async (params) => {
    const collecions = await SelectAllItems(Collection, params);
    console.log(collecions);
}

getAllCollections({
    include: {
        model: Topic,
        required: true
    }
});