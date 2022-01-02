import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({ component }) =>{
    const uid = useSelector((state)=>state.user.uid);
    return uid ? component : <Navigate to="/" />
}
export default PrivateRoute;