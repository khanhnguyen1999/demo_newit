import React,{useState,useContext} from 'react'
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { useToasts } from 'react-toast-notifications'

import {AppContext} from '../../context/AppContext'

import {deleteExam} from '../../services/apiExam'

const ModalDeleteExam = ()=>{

    // const [visible,setVisible]=useState(false)
    const { addToast } = useToasts()
    const {getId,modalDeleteExam,_hideModalDeleteExam} = useContext(AppContext)

    
    const _deleteExam = ()=>{
        console.log("get Id ",getId)
        deleteExam(getId)
        .then(()=>_hideModalDeleteExam())
        .then(() => addToast('Delete Exam success!', {
            appearance: 'success',
            autoDismiss: true,
            pauseOnHover: true,
        }))
    }

    console.log("modal ",modalDeleteExam)
    return (
        <Modal
            title="Delete Exam"
            visible={modalDeleteExam}
            onOk={_deleteExam}
            onCancel={_hideModalDeleteExam}
            okText="Delete"
            cancelText="Cancel"
            okType="danger"
            >
            <p>Do you really want to delete this Exam?</p>
        </Modal>
    )
}
export default ModalDeleteExam