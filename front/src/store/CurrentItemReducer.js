import {ADD_MAIN_FIELDS, ADD_ITEM_TAGS, ADD_CUSTOM_FIELDS, ADD_COMMENTS } from "./types/currentItemTypes"

const initialState = {
    id: "",
    name:"",
    collection:{},
    customFields:[],
    tags:[],
    comments:[],
}

const CurrentItemReducer = (state = initialState, {payload, type})=>{
    switch (type){
        case ADD_MAIN_FIELDS:
            return {
                ...state,
                id:  payload.id,
                name: payload.name,
                collection: payload.collection,
            }
        case ADD_ITEM_TAGS:
            return {
                ...state,
                tags: payload
            }
        case ADD_CUSTOM_FIELDS:
            return {
                ...state,
                customFields: payload
            }
        case ADD_COMMENTS:
            return {
                ...state,
                comments: payload
            }
        default:
            return state;
    }
}
export default CurrentItemReducer;