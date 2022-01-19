import { ADD_COLLECTIONS, ADD_TOPICS} from "../store/types/collectionsTypes";
import axios from "axios";

export const addCollections = (collections) => ({
    type: ADD_COLLECTIONS,
    payload: collections
});

export const addTopics = (topics) => ({
    type: ADD_TOPICS,
    payload: topics
});

export const getCollections = () => dispatch => {
    axios.get(`${process.env.REACT_APP_PATH}/api/collections`)
        .then(res=>{
            dispatch(addCollections(res.data))
        })
        .catch(e => {
            console.error(e);
        });
}

export const getTopics = () => dispatch => {
    axios.get(`${process.env.REACT_APP_PATH}/api/topics`)
        .then(res=>{
            dispatch(addTopics(res.data))
        })
        .catch(e => {
            console.error(e);
        });
}

