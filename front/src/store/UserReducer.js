import {LOG_IN, LOG_OUT, SET_ADMIN_STATUS} from "./types/userTypes"

const initialState = {
    userName:null,
    uid:null,
    token:null,
    admin:null,
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
        case SET_ADMIN_STATUS:
            return {
                ...state,
                admin:payload,
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