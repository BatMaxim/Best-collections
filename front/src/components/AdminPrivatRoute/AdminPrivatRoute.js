import React from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const AdminPrivateRoute = ({ component }) =>{
    const { admin, uid }= useSelector((state)=>state.user);
    return (admin && uid) ? component : <Navigate to="/" />
}
export default AdminPrivateRoute;