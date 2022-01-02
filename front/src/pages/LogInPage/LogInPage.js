import React from "react";
import LogInForm from "../../components/LogInForm/LogInForm";
import "./LogInPage.css"
const LogInPage = () =>{
    return(
        <div className="log-in__container">
            <LogInForm title="Log in" handleClick={()=>console.log("Log-in")}/>
        </div>
    )
}
export default LogInPage;