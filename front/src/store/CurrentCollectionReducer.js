import {ADD_COLLECTION, DELETE_CARDS, ADD_FIELDS, ADD_CARD} from "./types/currentCollectionTypes"

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
        case ADD_CARD:
            return {
                ...state,
                cards: [...state.cards, payload]
            }
        case DELETE_CARDS:
            return {
                ...state,
                cards: []
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