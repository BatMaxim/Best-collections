import {LOG_IN, LOG_OUT} from "../store/types/userTypes";

export const addUser = (userName, uid, token) => ({
    type: LOG_IN,
    payload: {
        userName,
        uid,
        token
    },
});

export const userLogIn = (userName, uid, token) => dispatch => {
    localStorage.setItem("user", userName);
    localStorage.setItem("uid", uid);
    localStorage.setItem("token", token);
    dispatch(addUser(userName, uid, token));
};



export const deleteUser = () => ({
    type: LOG_OUT,
});

export const userLogOut = () => dispatch => {
    localStorage.removeItem("user");
    localStorage.removeItem("uid");
    localStorage.removeItem("token");
    dispatch(deleteUser());
};

export const autoLogIn = () => dispatch => {
    const userName = localStorage.getItem("user");
    const uid = localStorage.getItem("uid");
    const token = localStorage.getItem("token");
    dispatch(addUser(userName, uid, token));
};