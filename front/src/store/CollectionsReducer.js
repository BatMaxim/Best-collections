import {CLEAR_COLLECTIONS, ADD_COLLECTIONS} from "./types/collectionsTypes"

const initialState = {
    collections:[]
}

const CollectionsReducer = (state = initialState, {payload, type})=>{
    switch (type){
        case ADD_COLLECTIONS:
            return {
                ...state,
                collections: payload
            }
        case CLEAR_COLLECTIONS:
            return {
                ...state,
                collections:[]
            }
        default:
            return state;
    }
}
export default CollectionsReducer;