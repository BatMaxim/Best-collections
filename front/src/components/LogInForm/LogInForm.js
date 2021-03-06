import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import "./LogInForm.css";
import {Link, useNavigate} from "react-router-dom";
import {getAdminStatus, userLogIn} from "../../actions/userActions";
import {useDispatch} from "react-redux";

const LogInForm = ({title, handleClick}) =>{
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const submitForm= (event)=>{
        event.preventDefault();
        handleClick(login, password)
            .then((userCredential) => {
                const {email, uid, accessToken} = userCredential.user;
                dispatch(userLogIn(email,uid,accessToken));
                dispatch(getAdminStatus(accessToken));
                setError("");
                navigate("/")
            })
            .catch((err)=>{
                setError(err.message.replace("Firebase: ", ""));
                }
            )
    }

    return(
        <Form className="log-in__form"
        onSubmit={submitForm}>
            <h2 className="log-in__title">{title}</h2>
            <div className="log-in__error-container">
                <Form.Text className="log-in__error">
                    {error}
                </Form.Text>
            </div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                              value={login}
                              onChange={(event)=>setLogin(event.target.value)}
                              placeholder="Enter email"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                              value={password}
                              onChange={(event)=>setPassword(event.target.value)}
                              placeholder="Password" />
            </Form.Group>
            <Button variant="dark" type="submit">
                {title}
            </Button>
            <Form.Group className="log-in__text">
                {title==="Log in" ?
                    <Form.Text>Don't you have an account? <Link to={"/registration"}>Sign up</Link></Form.Text> :
                    <Form.Text>Already have an account? <Link to={"/login"}>Log in</Link></Form.Text> }
            </Form.Group>
        </Form>
    )
}
export default LogInForm;