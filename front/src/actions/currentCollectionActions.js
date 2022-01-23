import {ADD_COLLECTION, ADD_CARDS, ADD_FIELDS} from "../store/types/currentCollectionTypes";
import axios from "axios";

export const addCollection = (collection) => ({
    type: ADD_COLLECTION,
    payload: collection
});

export const addCards= (cards) => ({
    type: ADD_CARDS,
    payload: cards
});

export const addFields= (fields) => ({
    type: ADD_FIELDS,
    payload: fields
});

export const getCollection =  (id) => async dispatch => {
    let collection = await axios.get(`${process.env.REACT_APP_PATH}/api/collections/${id}`);
    let author = await axios.get(`${process.env.REACT_APP_PATH}/api/users/${collection.data.authorId}`);
    collection.data.author ={
        id: author.data.uid,
        email: author.data.email,
    };
    dispatch(addCollection(collection.data));
}

export const getCards =  (id) => async dispatch => {
    let cards = await axios.get(`${process.env.REACT_APP_PATH}/api/cards/${id}`);

    dispatch(addCards(cards.data));
}

export const getFields = (id) => async dispatch => {
    let fields = await axios.get(`${process.env.REACT_APP_PATH}/api/fields/name/${id}`);
    dispatch(addFields(fields.data));
}
