import {ADD_COLLECTION, ADD_CARD, DELETE_CARDS, ADD_FIELDS} from "../store/types/currentCollectionTypes";
import axios from "axios";

export const addCollection = (collection) => ({
    type: ADD_COLLECTION,
    payload: collection
});

export const addCard= (card) => ({
    type: ADD_CARD,
    payload: card
});

export const deleteCards = () => ({
    type: DELETE_CARDS,
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
    let cards = await axios.get(`${process.env.REACT_APP_PATH}/api/items/${id}`);
    for (let i=0; i<cards.data.length; i++){
        const card = cards.data[i];
        card.customFields = (await axios.get(`${process.env.REACT_APP_PATH}/api/fields/values/${card.id}`)).data;
        dispatch(addCard(card));
    }
}

export const getFields = (id) => async dispatch => {
    let fields = await axios.get(`${process.env.REACT_APP_PATH}/api/fields/name/${id}`);
    dispatch(addFields(fields.data));
}
