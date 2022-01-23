import {ADD_COLLECTION, ADD_CARDS, ADD_FIELDS} from "./types/currentCollectionTypes"

const initialState = {
    collection:{},
    cards:[],
    fields:[],
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
        case ADD_FIELDS:
            return {
                ...state,
                fields: payload
            }
        default:
            return state;
    }
}
export default CurrentCollectionReducer;