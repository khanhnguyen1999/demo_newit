import React,{useEffect,useState} from 'react'
import {Form} from 'react-bootstrap'
// import Input 
import InputComponent from '../../../components/InputComponent'
import ButtonComponent from '../../../components/ButtonComponent'
import {createTag,getTags} from '../../../services/apiTag'
import TableComponent from '../../../components/TableComponent'
import LoadingComponent from '../../../components/LoadingComponent'

const CreateTag = ()=>{

    const [toggle,setToggle]=useState(false)
    const [tagName,setTagName]=useState("")
    const [data,setData]=useState([])
    const _handleChange = (v)=>{
        setTagName(v)
    }
    const _onSubmit = (e)=>{
        e.preventDefault();
        createTag({tagName})
        .then(data=>{
            console.log("data ",data)
        })
    }
    const _toggleCreate = (value)=>{
        console.log("toggle ",value)
        setToggle(value)
    }
    useEffect(()=>{
        getTags()
        .then(data=>{
            console.log("data ",data)
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
    return (
        <>
            {/* <LoadingComponent/> */}
            <ButtonComponent text="Create Tag" onToggle={_toggleCreate}/>
            {toggle?_handleCreateTag():null}
            <h2 className="text-center mt-3">Tags List</h2>
            <TableComponent data={data}/>
        </>
    )
}
export default CreateTag;