import {CLEAR_USERS, ADD_USERS} from "../store/types/usersTypes";
import axios from "axios";

export const addUsers = (users) => ({
    type: ADD_USERS,
    payload: users
});

export const getUsers = (userName) => dispatch => {
    axios.get('http://localhost:3001/api/users')
        .then(res=>{
            dispatch(addUsers(res.data.users))
        })
        .catch(e => {
        console.error(e);
        });
}

export const clearUsers = () => ({
    type: CLEAR_USERS,
});