import {ADD_COLLECTION, ADD_CARDS} from "./types/currentCollectionTypes"

const initialState = {
    collection:{},
    cards:[]
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
        case ADD_CARDS:
            return {
                ...state,
                cards: payload
            }
        default:
            return state;
    }
}
export default CurrentCollectionReducer;