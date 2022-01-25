import {ADD_MAIN_FIELDS, ADD_ITEM_TAGS, ADD_CUSTOM_FIELDS } from "./types/currentItemTypes"

const initialState = {
    id: "",
    name:"",
    collection:{},
    customFields:[],
    tags:[],
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
        default:
            return state;
    }
}
export default CurrentItemReducer;