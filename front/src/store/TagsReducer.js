import { ADD_TAGS } from "./types/tagsTypes"

const initialState = {
    tags:[],
}

const TagsReducer = (state = initialState, {payload, type})=>{
    switch (type){
        case ADD_TAGS:
            return {
                ...state,
                tags: payload
            }
        default:
            return state;
    }
}
export default TagsReducer;