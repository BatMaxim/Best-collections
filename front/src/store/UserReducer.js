import {LOG_IN, LOG_OUT} from "./types/userTypes"

const initialState = {
    userName:null,
    uid:null,
    token:null,
}

const UserReducer = (state = initialState, {payload, type})=>{
    switch (type){
        case LOG_IN:
            return {
                ...state,
                userName: payload.userName,
                uid: payload.uid,
                token: payload.token,
            }
        case LOG_OUT:
            return {
                ...state,
                userName: null,
                uid: null,
                token: null,
            }
        default:
            return state;
    }
}
export default UserReducer;