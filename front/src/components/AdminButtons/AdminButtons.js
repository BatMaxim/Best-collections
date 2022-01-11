import React from "react";
import {ButtonGroup, Button} from "react-bootstrap";
import axios from "axios";
import {useDispatch} from "react-redux";
import {clearUsers, getUsers} from "../../actions/usersActions";

const AdminButtons = ({selectedUsers}) => {
    const dispatch = useDispatch();
    const deleteUsers = () => {
        axios.delete("http://localhost:3001/api/users", {
            data:{
                users: selectedUsers,
            }
        })
            .then((data)=>{
                dispatch(clearUsers());
                dispatch(getUsers());
            })
    }
    const setAdmin = (status) => {
        axios.put("http://localhost:3001/api/users/admin", {
            data:{
                users: selectedUsers,
                admin:status,
            }
        })
            .then((data)=>{
                dispatch(clearUsers());
                dispatch(getUsers());
            })
    }
    const setBlock = (status) => {
        axios.put("http://localhost:3001/api/users/block", {
            data:{
                users: selectedUsers,
                block: status,
            }
        })
            .then((data)=>{
                dispatch(clearUsers());
                dispatch(getUsers());
            })
    }
    return (
        <ButtonGroup>
            <Button variant="dark" onClick={deleteUsers}>Delete</Button>
            <Button variant="dark" onClick={()=>{setBlock(true)}}>Block</Button>
            <Button variant="dark" onClick={()=>{setBlock(false)}}>Unblock</Button>
            <Button variant="dark" onClick={()=>{setAdmin(true)}}>Add admin status</Button>
            <Button variant="dark" onClick={()=>{setAdmin(false)}}>Delete admin status</Button>
        </ButtonGroup>
    );
}

export default AdminButtons;