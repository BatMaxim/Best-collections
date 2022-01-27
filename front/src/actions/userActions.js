import {LOG_IN, LOG_OUT, SET_ADMIN_STATUS} from "../store/types/userTypes";
import {getAuth, signInWithCustomToken} from "firebase/auth";
import axios from "axios";

export const addUser = (userName, uid, token) => ({
    type: LOG_IN,
    payload: {
        userName,
        uid,
        token
    },
});

export const setAdminStatus = (status) => ({
    type: SET_ADMIN_STATUS,
    payload: status,
});

export const userLogIn = (userName, uid, token) => dispatch => {
    localStorage.setItem("token", token);
    dispatch(addUser(userName, uid, token));
};

export const deleteUser = () => ({
    type: LOG_OUT,
});

export const userLogOut = () => dispatch => {
    localStorage.removeItem("token");
    dispatch(deleteUser());
};

export const getAdminStatus = (token) => async dispatch => {
    const adminStatus = await  axios.get(`${process.env.REACT_APP_PATH}/api/admin`, {
        headers: { Authorization: `${token}` },
    });
    dispatch(setAdminStatus(adminStatus.data));
};

export const autoLogIn = () => async dispatch => {
    const auth = getAuth();
    const token = localStorage.getItem("token");
    const customToken = await axios.get(`${process.env.REACT_APP_PATH}/api/login`, {
        headers: { Authorization: `${token}` },
    });
    await signInWithCustomToken(auth, customToken.data).then((userCredential) => {
        const {email, uid, accessToken} = userCredential.user;
        dispatch(userLogIn(email,uid,accessToken));
        dispatch(getAdminStatus(accessToken));
    })


};