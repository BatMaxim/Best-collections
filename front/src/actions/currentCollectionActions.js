import {ADD_COLLECTION} from "../store/types/currentCollectionTypes";
import axios from "axios";

export const addCollection = (collection) => ({
    type: ADD_COLLECTION,
    payload: collection
});

export const getCollection =  (id) => async dispatch => {
    let collection = await axios.get(`${process.env.REACT_APP_PATH}/api/collection/${id}`);
    let author = await axios.get(`${process.env.REACT_APP_PATH}/api/users/${collection.data.authorId}`);
    collection.data.author ={
        id: author.data.uid,
        email: author.data.email,
    };
    dispatch(addCollection(collection.data));
}
