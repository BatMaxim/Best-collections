const Comment = require("../Models/Comment");
const {SelectAllItems, InsertItem} = require("../Database");

const getComments = async (params) => {
    const comments = await SelectAllItems(Comment, params);
    return comments;
}


const AddComment = async (params) => {
    const comment = await InsertItem(Comment, params);
    return comment;
}


module.exports = { getComments, AddComment};