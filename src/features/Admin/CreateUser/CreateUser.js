import React,{useState} from 'react'
import {Form} from 'react-bootstrap'

import { Select } from 'antd';

// import Input 
import InputComponent from '../../../components/InputComponent'
import ButtonComponent from '../../../components/ButtonComponent'

import {Table} from 'antd'

const CreateUser = ()=>{

    const [users,setUser]=useState([])

    const { Option } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }


  
    return (
        <>
            <h1>List Users</h1>
            {/* <Table columns={columns} dataSource={users}/> */}
        </>
    )
}
export default CreateUser;