const {InsertItem} = require("../Database");
const FieldsNames = require("../Models/FieldsNames");

const addFieldName = async (params) => {
    const fieldName = await InsertItem(FieldsNames, params);
    return fieldName;
}

module.exports = { addFieldName };