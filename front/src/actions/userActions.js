import {LOG_IN, LOG_OUT} from "../store/types/userTypes";
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

export const autoLogIn = () => async dispatch => {
    const auth = getAuth();
    const token = localStorage.getItem("token");
    const customToken = await axios.get(`${process.env.REACT_APP_PATH}/api/login`, {
        headers: { Authorization: `${token}` },
    });
    signInWithCustomToken(auth, customToken.data).then((userCredential) => {
        const {email, uid, accessToken} = userCredential.user;
        dispatch(userLogIn(email,uid,accessToken));
    })
    // // const userName = localStorage.getItem("user");
    // // const uid = localStorage.getItem("uid");
    //
    // dispatch(addUser(userName, uid, token));
};