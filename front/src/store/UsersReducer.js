import {ADD_USERS} from "./types/usersTypes"

const initialState = {
    users:[]
}

const UsersReducer = (state = initialState, {payload, type})=>{
    switch (type){
        case ADD_USERS:
            return {
                ...state,
                users: payload
            }
        default:
            return state;
    }
}
export default UsersReducer;