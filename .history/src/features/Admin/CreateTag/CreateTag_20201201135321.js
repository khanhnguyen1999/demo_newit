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
    const [value, setValue] = useState('');
    // const [dataSource, setDataSource] = useState(data);
    const [searchText,setSearchText]=useState("")


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
        .then(data=>{
            setData(data)
        })
    },[])
    
    const _onChange = (e)=> {
        const filteredData = data.filter(entry =>
            entry.tagName.includes(e.target.value)
          );
        setData(filteredData);
    }
   

    useEffect(()=>{
        console.log("search ",searchText)
        const filteredEvents = data.filter(({ tagName }) => {
            tagName = tagName.toLowerCase();
            return tagName.includes(searchText);
        });
        setData(filteredEvents)
    },[searchText])

    const _handleCreateTag = ()=>(
        <Form onSubmit={_onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Tag Name</Form.Label>
                <InputComponent handleChange={_handleChange} type="text" placeholder="Enter Tag name..." />
            </Form.Group>
            <InputComponent type="submit" text="Create Tag"/>
        </Form>
    )

    const FilterByNameInput = (
        <input
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
            <TableComponent data={data}/>
        </>
    )
}
export default CreateTag;