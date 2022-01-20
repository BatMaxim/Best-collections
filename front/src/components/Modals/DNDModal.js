import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap"
import Dropzone from "../Dropzone/Dropzone";

const DNDModal = ({show, close}) =>{
    return(
        <Modal show={true}
               onHide={close}
               backdrop="static"
               keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>File Upload</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Dropzone />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Close</Button>
                <Button variant="primary" type="submit">Accept</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DNDModal;