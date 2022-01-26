import React from "react";
import LogInForm from "../../components/LogInForm/LogInForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./LogInPage.css"
const LogInPage = () =>{
    const handleLogin = (email, password)=> {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }
    return(
        <div className="log-in__container">
            <LogInForm title="Log in" handleClick={handleLogin}/>
        </div>
    )
}
export default LogInPage;