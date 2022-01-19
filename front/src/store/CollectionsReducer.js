import { ADD_COLLECTIONS, ADD_TOPICS} from "./types/collectionsTypes"

const initialState = {
    collections:[],
    topics:[],
}

const CollectionsReducer = (state = initialState, {payload, type})=>{
    switch (type){
        case ADD_COLLECTIONS:
            return {
                ...state,
                collections: payload
            }
        case ADD_TOPICS:
            return {
                ...state,
                topics: payload
            }
        default:
            return state;
    }
}
export default CollectionsReducer;