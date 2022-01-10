import React, {useEffect, useState} from "react";
import UsersTable from "../../components/UsersTable/UsersTable";
import {useDispatch, useSelector} from "react-redux";
import {clearUsers, getUsers} from "../../actions/usersActions";

const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state=>state.admin.users)
    useEffect(()=>{
        console.log("1 T")
        dispatch(clearUsers());
        console.log("2 T")
        dispatch(getUsers());
        console.log("3 T")
    }, [])

    return(
        <div>
            <UsersTable users={users}/>
        </div>
    )
}
export default UsersPage;