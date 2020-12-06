import React,{useEffect,useState} from 'react'
import {Form} from 'react-bootstrap'
// import Input 
import InputComponent from '../../../components/InputComponent'
import ButtonComponent from '../../../components/ButtonComponent'
import {createTag,getTags} from '../../../services/apiTag'
import TableComponent from '../../../components/TableComponent'
import LoadingComponent from '../../../components/LoadingComponent'

import { Input, Table } from 'antd';
import SearchField from "react-search-field";
import TypeChecker from 'typeco';
// import '../Question/node_modules/react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const CreateTag = ()=>{

    const [toggle,setToggle]=useState(false)
    const [tagName,setTagName]=useState("")
    const [data,setData]=useState([])
    const [filter,setFilter]=useState([])

    const _handleChange = (v)=>{
        setTagName(v)
    }
    const _onSubmit = (e)=>{
        e.preventDefault();
        createTag({tagName})
        .then(data=>{
            NotificationManager.success('Success...');
        })
    }
    const _toggleCreate = (value)=>{
        setToggle(value)
    }
    useEffect(()=>{
        getTags()
        .then(d=>{
            setData(d)
        })
    },[setData])
    useEffect(()=>{
        setFilter(data)
    },[data])
    const _onChange = (e)=> {
        const query = e.target.value;

       if(query!="")
       {
        const filteredData = data.filter(element => {
            return element.tagName.toLowerCase().includes(query.toLowerCase());
            });
        setFilter(filteredData)
       }
       if(query==""){
        setFilter(data)
       }
    }

    const _handleCreateTag = ()=>(
        <Form onSubmit={()=>_onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Tag Name</Form.Label>
                <InputComponent handleChange={_handleChange} type="text" placeholder="Enter Tag name..." />
            </Form.Group>
            <InputComponent type="submit" text="Create Tag"/>
        </Form>
    )

    const FilterByNameInput = (
        <Input
            type="text"
            className="mt-3 mb-3"
            placeholder="Search Name"
            onChange={_onChange}
        />
      );
    return (
        <>
            <ButtonComponent text="Create Tag" onToggle={_toggleCreate}/>
            {toggle?_handleCreateTag():null}
            <h2 className="text-center mt-3">Tags List</h2>
            {FilterByNameInput}
            <TableComponent data={filter}/>
        </>
    )
}
export default CreateTag;