import {ADD_TAGS} from "../store/types/tagsTypes";
import axios from "axios";

export const addTags = (tags) => ({
    type: ADD_TAGS,
    payload: tags,
});


export const getTags =  () => async dispatch => {
    let tags = await axios.get(`${process.env.REACT_APP_PATH}/api/tags/`);
    dispatch(addTags(tags.data));
}
