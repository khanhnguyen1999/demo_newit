import React,{useEffect,useState} from 'react'
import {Form} from 'react-bootstrap'
// import Input 
import InputComponent from '../../../components/InputComponent'
import ButtonComponent from '../../../components/ButtonComponent'
import {createTag,getTags} from '../../../services/apiTag'
import TableComponent from '../../../components/TableComponent'
import LoadingComponent from '../../../components/LoadingComponent'

import { Input, Table } from 'antd';
// import '../Question/node_modules/react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const CreateTag = ()=>{

    const [toggle,setToggle]=useState(false)
    const [tagName,setTagName]=useState("")
    const [data,setData]=useState([])
    const [value, setValue] = useState('');
    const [dataSource, setDataSource] = useState(data);


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
    },[data])
    const _handleCreateTag = ()=>(
        <Form onSubmit={_onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Tag Name</Form.Label>
                <InputComponent handleChange={_handleChange} type="text" placeholder="Enter Tag name..." />
            </Form.Group>
            <InputComponent type="submit" text="Create Tag"/>
        </Form>
    )
    console.log("check ",data)
    const FilterByNameInput = (
        <Input
          placeholder="Search Name"
          value={value}
          onSearch={text=> {
            // const currValue = e.target.value;
            // setValue(currValue);
            // const filteredData = data.filter(entry =>
            //   entry.name.includes(currValue)
            // );
            // setDataSource(filteredData);
            const filteredEvents = data.filter(({ tagName }) => {
                title = tagName.toLowerCase();
                return title.includes(text);
              });
              setData(filteredEvents)
          }}
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