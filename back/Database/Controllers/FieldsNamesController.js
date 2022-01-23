const {InsertItem, SelectAllItems, DeleteItem, UpdateItem} = require("../Database");
const FieldsNames = require("../Models/FieldsNames");
const Topic = require("../Models/Topic");
const Collection = require("../Models/Collection");

const addFieldName = async (params) => {
    const fieldName = await InsertItem(FieldsNames, params);
    return fieldName;
}

const deleteFieldName = async (params) => {
    const fieldName = await DeleteItem(FieldsNames, params);
    return fieldName;
}

const updateFieldName = async (newValues, params) => {
    const fieldName = await UpdateItem(FieldsNames, newValues, params);
    return fieldName;
}

const getFieldsNames = async (id) => {
    const params = {
        where:{
            collectionId: id,
        },
    }
    const fieldsNames = await SelectAllItems(FieldsNames, params);
    return fieldsNames;
}


module.exports = { addFieldName, getFieldsNames, deleteFieldName, updateFieldName};