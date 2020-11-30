import React,{useContext} from 'react'
import {Modal,Button} from 'react-bootstrap'
import {AppContext} from '../context/AppContext'

const ModalComponent = ()=>{
    const {_hideModal,isModal} = useContext(AppContext)

    const _deleteTag = ()=>{
        deleteTag(id)
        .then(data=>{
          console.log("data ",data)
        })
    }
    return (
        <Modal show={isModal}>
            <Modal.Header closeButton onClick={_hideModal}>
                <Modal.Title>Delete todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete your item?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={_hideModal}>
                    Close
                </Button>
                <Button variant="danger" onClick={_deleteTag}>
                    Delete Item
                </Button>
            </Modal.Footer>
        </Modal>
        )
}
export default ModalComponent