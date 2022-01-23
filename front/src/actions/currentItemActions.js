import {SET_ITEM_CUSTOM_FIELDS} from "../store/types/currentItemTypes";


export const setItemCustomFields = (fields) => ({
    type: SET_ITEM_CUSTOM_FIELDS,
    payload: fields,
});

