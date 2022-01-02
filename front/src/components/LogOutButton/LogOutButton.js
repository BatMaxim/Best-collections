import React from "react";
import {useDispatch} from "react-redux";
import {userLogOut} from "../../actions/userActions";
import {Button} from "react-bootstrap";

const LogOutButton = () =>{
    const dispatch = useDispatch();
    const logout = () =>{
        dispatch(userLogOut());
    }
    return( <Button variant="outline-light" onClick={() => logout()}>Log out</Button>)
}

export default LogOutButton;