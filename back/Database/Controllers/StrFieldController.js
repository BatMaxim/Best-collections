const {SelectAllItems} = require("../Database");
const StrField = require("../Models/StrField");
const FieldsNames = require("../Models/FieldsNames");

const getStrField = async (itemId) => {
    const strFields = await SelectAllItems(StrField,{
        where:{
            itemId: itemId,
        },
        include: {
            model: FieldsNames,
            required: true
        }});
    return strFields;
}

module.exports = {getStrField};