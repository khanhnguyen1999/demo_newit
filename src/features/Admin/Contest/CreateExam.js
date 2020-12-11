import React,{useState,useEffect} from 'react'
import {Form} from 'react-bootstrap'
import ListQuestionCreateExam from './ListQuestionCreateExam'

import moment from 'moment';
import { useToasts } from 'react-toast-notifications'

import {Input,Button} from 'antd'

import {createExam} from '../../../services/apiExam'

import { Select,TimePicker } from 'antd';
import {getAllCandidate} from '../../../services/apiCandidate'

const CreateExam = ()=>{
    const [tags,setTags]=useState([])
    const [formData,setFormData]=useState([])
    const [chooseTags,setChooseTags]=useState([{
        can:null
    }])
    
    const { addToast } = useToasts()
    
    function handleChange(e) {
        console.log("e ",e)
        setChooseTags(convertCan(e))
    }
    function convertCan(arr){
        const a1 = []
        for(var i=0;i<arr.length;i++){
            a1.push({
            "can":arr[i]
        })
    }
    return a1;    
    }
    function convertArrQues(arr){
        const a1 = []
        for(var i=0;i<arr.length;i++){
            a1.push({
            "question":arr[i]
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


    const _convertQues = (obj)=>{
        const a = []
        obj.map((item)=>{
            return a.push(item._id)
        })
        return convertArrQues(a)
    }
    
    const _onSubmit = (e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        data.append("nameExam",data.get("nameExam"))
        data.append("timer",data.get("timer"))
        var obj = {};
        var formData = data;
        for (var key of formData.keys()) {
            obj[key] = formData.get(key);
        }
        const ques_random = _convertQues(JSON.parse(localStorage.getItem("QUESTION_RANDOM")))
        const ques_choose = _convertQues(JSON.parse(localStorage.getItem("QUESTION")))
        obj["list_question"]=ques_choose.length>0?ques_choose:ques_random
        obj["id_user"] = "5fbe1363a76a1f265023c2a0";
        obj["list_can"] = chooseTags;
        createExam(obj)
        .then(value=>
            {
                setFormData(value)
            }
        )
        .then(() => addToast('Create Exam success!', {
            appearance: 'success',
            autoDismiss: true,
            pauseOnHover: true,
        }))
    }

    const format = 'HH:mm';
    return (
        <>
            <Form onSubmit={_onSubmit}>
                <Form.Group>
                    <Form.Label>Name Contest</Form.Label>
                    <Input name="nameExam" type="text" placeholder="Enter Name Contest..." />
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
                        {children}
                    </Select>
                </Form.Group>
                <Form.Group>
                        <Form.Label>Timer</Form.Label>
                        <TimePicker name="timer" className="ml-3" defaultValue={moment('00:00', format)} format={format} />
                </Form.Group>
                <Button block type="primary" className="mb-5" htmlType="submit">Create Exam</Button>
            </Form> 
            <ListQuestionCreateExam/>
        </>
    )
}
export default CreateExam