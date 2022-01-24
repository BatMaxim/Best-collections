import {SET_ITEM_CUSTOM_FIELDS} from "../store/types/currentFieldsTypes";


export const setItemCustomFields = (fields) => ({
    type: SET_ITEM_CUSTOM_FIELDS,
    payload: fields,
});

