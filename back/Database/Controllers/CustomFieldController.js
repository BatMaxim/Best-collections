const {SelectAllItems, InsertItems, UpdateItem} = require("../Database");
const StrField = require("../Models/StrField");
const BoolField = require("../Models/BoolField");
const IntField = require("../Models/IntField");
const TextField = require("../Models/TextField");
const FieldsNames = require("../Models/FieldsNames");

const getField = async (model, itemId) => {
    const strFields = await SelectAllItems(model,{
        where:{
            itemId: itemId,
        },
        include: {
            model: FieldsNames,
            required: true
        }});
    return strFields;
}

const addFields = (type, params) => {
    switch (type) {
        case "String":
            return InsertItems(StrField, params)
        case "Bool":
            return InsertItems(BoolField, params)
        case "Text":
            return InsertItems(TextField, params)
        case "Integer":
            return InsertItems(IntField, params)
    }
}

const updateField = (type, newValues, params) => {
    switch (type) {
        case "String":
            return UpdateItem(StrField, newValues, params)
        case "Bool":
            return UpdateItem(BoolField, newValues, params)
        case "Text":
            return UpdateItem(TextField, newValues, params)
        case "Integer":
            return UpdateItem(IntField, newValues, params)
    }
}

const getStrField = (id) => {
    return getField(StrField, id)
}
const getBoolField = (id) => {
    return getField(BoolField, id)
}
const getIntField = (id) => {
    return getField(IntField, id)
}
const getTextField = (id) => {
    return getField(TextField, id)
}

module.exports = {getStrField, getBoolField, getIntField, getTextField, addFields, updateField};