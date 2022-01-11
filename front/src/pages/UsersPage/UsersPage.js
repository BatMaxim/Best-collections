import React, {useEffect, useState} from "react";
import UsersTable from "../../components/UsersTable/UsersTable";
import {useDispatch, useSelector} from "react-redux";
import {clearUsers, getUsers} from "../../actions/usersActions";
import AdminButtons from "../../components/AdminButtons/AdminButtons";
import "./UsersPage.css";
import {CheckboxGroup} from "@createnl/grouped-checkboxes";

const UsersPage = () => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const dispatch = useDispatch();
    const users = useSelector(state=>state.admin.users)
    const onCheckboxChange = (checkboxes) => {
        setSelectedUsers(checkboxes.filter(el=>el.checked).map(el=>el.value));
    }
    useEffect(()=>{
        dispatch(clearUsers());
        dispatch(getUsers());
    }, [])

    return(
        <div>
            <div className="admin-tools">
                <AdminButtons selectedUsers={selectedUsers}/>
            </div>
            <CheckboxGroup onChange={onCheckboxChange}>
                <UsersTable users={users}/>
            </CheckboxGroup>
        </div>

    )
}
export default UsersPage;