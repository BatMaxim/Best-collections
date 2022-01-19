import { ADD_COLLECTIONS} from "../store/types/collectionsTypes";
import axios from "axios";

export const addCollections = (collections) => ({
    type: ADD_COLLECTIONS,
    payload: collections
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
