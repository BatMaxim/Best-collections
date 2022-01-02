import React from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
const LogInButton = () =>{
    const navigate = useNavigate();
    const login = () =>{
        navigate("/login")
    }
    return( <Button variant="outline-light" onClick={() => login()}>Log in</Button>)
}

export default LogInButton;