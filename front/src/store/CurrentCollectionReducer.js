import {ADD_COLLECTION} from "./types/currentCollectionTypes"

const initialState = {
    collection:{}
}

const CurrentCollectionReducer = (state = initialState, {payload, type})=>{
    switch (type){
        case ADD_COLLECTION:
            return {
                ...state,
                collection: {
                    id: payload.id,
                    name: payload.name,
                    description: payload.description,
                    topic: payload.topic,
                    picture: payload.picture,
                    author: payload.author,
                }

            }
        default:
            return state;
    }
}
export default CurrentCollectionReducer;