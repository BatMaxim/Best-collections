import {LOG_IN, LOG_OUT} from "../store/types/userTypes";

export const userLogIn = (userName, uid, token) => ({
    type: LOG_IN,
    payload: {
        userName,
        uid,
        token
    },
});
export const userLogOut = () => ({
    type: LOG_OUT,
});