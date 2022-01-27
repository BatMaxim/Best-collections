import React from "react";
import {ButtonGroup, Button} from "react-bootstrap";

const AdminButtons = ({deleteUsers, setBlock, setAdmin}) => {
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