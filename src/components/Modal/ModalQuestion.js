import React,{useContext,useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import {AppContext} from '../../context/AppContext'
import {deleteQuestion} from '../../services/apiQuestion'

const ModalQuestion = ()=>{
    const {_hideModalUpdate,getId,isModalQuestion,_hideModalQues} = useContext(AppContext)
    const [value,setValue]=useState({})

    const _handleDeleteQues = ()=>{
        deleteQuestion(getId)
        .then(data=>{
            console.log("delete ",data)
        })
        _hideModalQues()
    }
    return (
        <Modal show={isModalQuestion}>
            <Modal.Header closeButton  onClick={_hideModalQues}>
                <Modal.Title>Delete Question</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete this question?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={_hideModalQues} >
                    Close
                </Button>
                <Button variant="danger" onClick={_handleDeleteQues}>
                    Delete Item
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalQuestion