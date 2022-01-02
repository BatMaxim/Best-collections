import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import LogInForm from "../../components/LogInForm/LogInForm";


const RegistrationPage = () =>{
    const handleRegistration = (email, password) => {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password)
    }
    return(
        <div className="log-in__container">
            <LogInForm title="Sign up" handleClick={handleRegistration}/>
        </div>
    )
}
export default RegistrationPage;