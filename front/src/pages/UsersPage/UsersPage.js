import React, {useEffect, useState} from "react";
import UsersTable from "../../components/UsersTable/UsersTable";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../actions/usersActions";
import AdminButtons from "../../components/AdminButtons/AdminButtons";
import "./UsersPage.css";
import {CheckboxGroup} from "@createnl/grouped-checkboxes";
import axios from "axios";

const UsersPage = () => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const dispatch = useDispatch();
    const users = useSelector(state=>state.admin.users)
    const onCheckboxChange = (checkboxes) => {
        setSelectedUsers(checkboxes.filter(el=>el.checked).map(el=>el.value));
    }
    useEffect(()=>{
        dispatch(getUsers());
    }, [])
    const cahgeUsers = (method, data, path)=>{
        method(`${process.env.REACT_APP_PATH}/api/users${path?path:""}`, data)
            .then((data)=>{
                dispatch(getUsers());
            })
    }
    const deleteUsers = () => {
        const data = {
            data:{
            users: selectedUsers
        }
        }
        cahgeUsers(axios.delete, data)
    }
    const setAdmin = (status) => {
        const data = {
            users: selectedUsers,
            admin:status,
        }
        cahgeUsers(axios.put, data, '/admin');
    }
    const setBlock = (status) => {
        const data = {
            users: selectedUsers,
            block:status,
        }
        cahgeUsers(axios.put, data, '/block');
    }
    return(
        <div>
            <div className="admin-tools">
                <AdminButtons setBlock={setBlock}
                              setAdmin={setAdmin}
                              deleteUsers={deleteUsers}/>
            </div>
            <CheckboxGroup onChange={onCheckboxChange}>
                <UsersTable users={users}/>
            </CheckboxGroup>
        </div>

    )
}
export default UsersPage;