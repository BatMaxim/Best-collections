import {ADD_COLLECTION} from "../store/types/currentCollectionTypes";
import axios from "axios";

export const addCollection = (collection) => ({
    type: ADD_COLLECTION,
    payload: collection
});

export const getCollection = (id) => dispatch => {
    axios.get(`${process.env.REACT_APP_PATH}/api/collection/${id}`)
        .then(res=>{
            dispatch(addCollection(res.data))
        })
        .catch(e => {
            console.error(e);
        });
}
