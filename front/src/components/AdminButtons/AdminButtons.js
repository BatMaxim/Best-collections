import React from "react";
import {ButtonGroup, Button} from "react-bootstrap";

const AdminButtons = () => {
    return (
        <ButtonGroup>
            <Button variant="dark">Delete</Button>
            <Button variant="dark">Block</Button>
            <Button variant="dark">Unblock</Button>
            <Button variant="dark">Add admin status</Button>
            <Button variant="dark">Delete admin status</Button>
        </ButtonGroup>
    );
}

export default AdminButtons;