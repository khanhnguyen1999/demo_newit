import React,{useState,useEffect} from 'react'
import {Form} from 'react-bootstrap'
import ListQuestionCreateExam from './ListQuestionCreateExam'

import {Input} from 'antd'

import {createExam} from '../../../services/apiExam'

import { Select } from 'antd';
import {getAllCandidate} from '../../../services/apiCandidate'

const CreateExam = ()=>{
    const [tags,setTags]=useState([])
    const [formData,setFormData]=useState([])
    const [chooseTags,setChooseTags]=useState([{
        can:null
    }])

    function handleChange(e) {
        setChooseTags(convert(e))
    }
    function convert(arr){
        const a1 = []
        for(var i=0;i<arr.length;i++){
            a1.push({
            "can":arr[i]
        })
    }
    return a1;    
    }
    const children = [];
    for (let i = 0; i < tags.length; i++) {
        children.push(<Select.Option value={tags[i]._id} key={i}>{tags[i].can_email}</Select.Option>);
    }
    useEffect(()=>{
        getAllCandidate()
        .then(data=>{
            setTags(data)
        })
    },[setTags])

    const _onSubmit = (e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        data.append("nameExam",data.get("nameExam"))
        var obj = {};
        var formData = data;
        for (var key of formData.keys()) {
            obj[key] = formData.get(key);
        }
        obj["id_user"] = "5fbe1363a76a1f265023c2a0";
        obj["list_can"] = chooseTags;
        createExam(obj)
        .then(value=>
            {
                setFormData(value)
            }
        )
    }
    return (
        <>
              <Form onSubmit={_onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name Contest</Form.Label>
                    <Input name="nameExam" type="text" placeholder="Enter Name Contest..." />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Questions Contest</Form.Label>
                    <Input name="quesExam" min="10" max="100" type="number" placeholder="Enter Name Contest..." />
                </Form.Group>
                <Form.Group>
                    <p>Tags:</p>
                    <Select
                        id="questions"
                        name="questions"
                        mode="multiple"
                        placeholder="Please select"
                        defaultValue={[]}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    >
                        {children}x
                    </Select>
                </Form.Group>
            </Form> 
            <ListQuestionCreateExam/>
        </>
    )
}
export default CreateExam