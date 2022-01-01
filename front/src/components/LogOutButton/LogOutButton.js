import React from "react";
import {Button} from "react-bootstrap";

const LogOutButton = () =>{
    const logout = () =>{
        console.log("Log out");
    }
    return( <Button variant="outline-light" onClick={() => logout()}>Log out</Button>)
}

export default LogOutButton;