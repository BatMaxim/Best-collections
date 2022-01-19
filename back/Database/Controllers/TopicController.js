const Topic = require("../Models/Topic");
const {SelectAllItems} = require("../Database");


const getTopics = async (params) => {
    const topics = await SelectAllItems(Topic, params);
    return topics;
}

module.exports = { getTopics };