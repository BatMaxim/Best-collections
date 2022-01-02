import React from "react";
import LogInForm from "../../components/LogInForm/LogInForm";

const RegistrationPage = () =>{
    return(
        <div className="log-in__container">
            <LogInForm title="Sign up" handleClick={()=>console.log("Log-in")}/>
        </div>
    )
}
export default RegistrationPage;