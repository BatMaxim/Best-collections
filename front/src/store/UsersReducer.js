import {CLEAR_USERS, ADD_USERS} from "./types/usersTypes"

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
        case CLEAR_USERS:
            return {
                ...state,
                users:[]
            }
        default:
            return state;
    }
}
export default UsersReducer;