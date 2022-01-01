import React from "react";
import {Button} from "react-bootstrap";

const LogInButton = () =>{
    const login = () =>{
        console.log("Log in");
    }
    return( <Button variant="outline-light" onClick={() => login()}>Log in</Button>)
}

export default LogInButton;