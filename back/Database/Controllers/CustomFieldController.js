const {SelectAllItems} = require("../Database");
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

module.exports = {getStrField, getBoolField, getIntField, getTextField};