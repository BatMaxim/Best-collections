import {ADD_COLLECTION} from "./types/currentCollectionTypes"

const initialState = {
    id: "",
    name:"",
    description:"",
    topic:{},
    picture:""
}

const CurrentCollectionReducer = (state = initialState, {payload, type})=>{
    switch (type){
        case ADD_COLLECTION:
            return {
                ...state,
                id: payload.id,
                name: payload.name,
                description: payload.description,
                topic: payload.topic,
                picture: payload.picture
            }
        default:
            return state;
    }
}
export default CurrentCollectionReducer;