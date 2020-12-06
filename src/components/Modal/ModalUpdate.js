import React,{useContext,useState} from 'react'
import {Modal,Button,FormControl} from 'react-bootstrap'
import {AppContext} from '../../context/AppContext'
import {updateTag} from '../../services/apiTag'



const ModalUpdate = (e)=>{
    const {_hideModalUpdate,getId,isModalUpdate} = useContext(AppContext)
    const [value,setValue]=useState({})
    const onChange = (e)=>{
        setValue({tagName:e.target.value})
    }
    const _updateTag = ()=>{
        updateTag(getId,value)  
        .then(data=>{
            console.log(data)
        })
        _hideModalUpdate()
    }
    return (
        <Modal show={isModalUpdate}>
            <Modal.Header closeButton onClick={_hideModalUpdate}>
                <Modal.Title>Update todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                        <FormControl onChange={onChange} name="tagName" type="text" placeholder="Enter Tag name..." />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={_hideModalUpdate}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={_updateTag}>
                        Save Item
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalUpdate