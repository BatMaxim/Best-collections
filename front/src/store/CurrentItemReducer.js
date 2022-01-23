import { SET_ITEM_CUSTOM_FIELDS } from "./types/currentItemTypes"

const initialState = {
    name: "",
    tags: [],
    currentFields: {},
}

const CurrentItemReducer = (state = initialState, {payload, type})=>{
    switch (type){
        case SET_ITEM_CUSTOM_FIELDS:
            return {
                ...state,
                currentFields: payload
            }
        default:
            return state;
    }
}
export default CurrentItemReducer;