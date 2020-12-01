import React from 'react'
import {Modal,Button} from 'react-bootstrap'

const ModalComponent = ()=>{
    return (
        <Modal show={show}>
            <Modal.Header closeButton onClick={_hideModal}>
                <Modal.Title>Delete todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete your item?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={_hideModal}>
                    Close
                </Button>
                <Button variant="danger" onClick={onClick}>
                    Delete Item
                </Button>
            </Modal.Footer>
        </Modal>
        )
}