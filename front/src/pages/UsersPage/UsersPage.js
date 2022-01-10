import React, {useEffect, useState} from "react";
import UsersTable from "../../components/UsersTable/UsersTable";
import {useDispatch, useSelector} from "react-redux";
import {clearUsers, getUsers} from "../../actions/usersActions";
import AdminButtons from "../../components/AdminButtons/AdminButtons";
import "./UsersPage.css";

const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state=>state.admin.users)
    useEffect(()=>{
        dispatch(clearUsers());
        dispatch(getUsers());
    }, [])

    return(
        <div>
            <div className="admin-tools">
                <AdminButtons />
            </div>
            <UsersTable users={users}/>
        </div>
    )
}
export default UsersPage;