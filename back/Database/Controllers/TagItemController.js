const TagItem = require("../Models/TagItem");
const {SelectAllItems, InsertItems,DeleteItem} = require("../Database");
const Tag = require("../Models/Tag");

const getTagsItems = async (id) => {
    const params = {
        where: {
            itemId: id
        },
        include: {
            model: Tag,
            required: true
        }
    }
}

const getAllTagsWithItems = async () => {
    const params = {
        include: {
            model: Tag,
            required: true
        },
        group: 'tagId'
    }
    const tags = await SelectAllItems(TagItem, params);
    return tags;
}

const AddTagsItems = async (params) => {
    const tags = await InsertItems(TagItem, params);
    return tags;
}

const DeleteTagsItems = async (id) => {
    const params= {
        where: {
            id: id
        }
    }
    const tags = await DeleteItem(TagItem, params);
    return tags;
}

module.exports = { AddTagsItems, getTagsItems, DeleteTagsItems, getAllTagsWithItems};