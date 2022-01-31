import {ADD_MAIN_FIELDS,ADD_ITEM_TAGS,ADD_CUSTOM_FIELDS,ADD_COMMENTS, ADD_COMMENT} from "../store/types/currentItemTypes";
import axios from "axios";

export const addMainItemFields = (item) => ({
    type: ADD_MAIN_FIELDS,
    payload: item,
});

export const addItemTags = (tags) => ({
    type: ADD_ITEM_TAGS,
    payload: tags,
});

export const addComments = (comments) => ({
    type: ADD_COMMENTS,
    payload: comments,
});
export const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment,
});


export const addCustomItemFields = (fields) => ({
    type: ADD_CUSTOM_FIELDS,
    payload: fields,
});

export const getItem =  (id) => async dispatch => {
    const item = await axios.get(`${process.env.REACT_APP_PATH}/api/item/${id}`);
    dispatch(addMainItemFields(item.data));
    const tags = await axios.get(`${process.env.REACT_APP_PATH}/api/tags/${id}`);
    dispatch(addItemTags(tags.data));
    const fields = await axios.get(`${process.env.REACT_APP_PATH}/api/fields/values/${item.data.id}`);
    dispatch(addCustomItemFields(fields.data));
}
