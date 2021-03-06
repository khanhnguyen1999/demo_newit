import React,{useState,useEffect} from 'react'
import {Form} from 'react-bootstrap'
import moment from 'moment';
import { Select,TimePicker } from 'antd';

import 'react-notifications/lib/notifications.css';
import { NotificationManager} from 'react-notifications';


import {getTags} from '../../../services/apiTag'
import {createQuestion} from '../../../services/apiQuestion'

import {Input} from 'antd'
import InputComponent from '../../../components/InputComponent'


const CreateQuestion = ()=>{
    const [selectValue,setSelectValue]=useState(0)
    const [tags,setTags]=useState([])
    const [correct,setCorrect]=useState(1)
    const [formData,setFormData]=useState([])
    const [chooseTags,setChooseTags]=useState([{
        tag:null
    }])
    const [valueSelect,setValueSelect]=useState(1)
    const [level,setLevel]=useState(1)
    const [value,setValue]=useState(0)
    
    const _handleOnChange = (value)=>{
        setSelectValue(value)
    }


    const children = [];
    for (let i = 0; i < tags.length; i++) {
        children.push(<Select.Option value={tags[i]._id} key={i}>{tags[i].tagName}</Select.Option>);
    }

    function convert(arr){
        const a1 = []
        for(var i=0;i<arr.length;i++){
            a1.push({
            "tag":arr[i]
        })
    }
    return a1;    
    }
    function handleChange(e) {
        setChooseTags(convert(e))
    }

    // const SelectSizesDemo = () => {
    //     const [size, setSize] = useState('default');

    //     const handleSizeChange = e => {
    //         setSize(e.target.value);
    //     };
    // }

    const _optionQuestion = ()=>{
        return (
            <Select defaultValue="0" style={{ width: 150 }} onChange={_handleOnChange}>
                <Select.Option value="0">Essay Question</Select.Option>
                <Select.Option value="1">Mul Question</Select.Option>
            </Select>
        )
    }

    const _onSubmitEssay = (e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        data.append("id_user","5fc05cd21370ca2b28a124f7")
        data.append("type","Essay")
        data.append("correct_answer",data.get("correct_answer"))
        data.append("LOD",data.get("LOD"))
        data.append("question",data.get("question"))
        data.append("answerA",data.get("answerA"))
        data.append("answerB",data.get("answerB"))
        data.append("answerC",data.get("answerC"))
        data.append("answerD",data.get("answerD"))
        data.append("time","")
        var obj = {};
        var formData = data;
        for (var key of formData.keys()) {
            obj[key] = formData.get(key);
        }
        obj["id_tag"] = chooseTags
        createQuestion(obj)
        .then(value=>
            {
                setFormData(value)
                NotificationManager.success('Success message', 'Title here');
            }
        )
    }

    const _onChange = (e)=>{
        setValueSelect(e)
    }
    const _onSubmitMul = (e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        data.append("type","Mul")
        data.append("score",data.get("score"))
        data.append("question",data.get("question"))
        data.append("LOD",valueSelect)
        data.append("time",data.get("time"))
        var obj = {};
        var formData = data;
        for (var key of formData.keys()) {
            obj[key] = formData.get(key);
        }
        obj["id_tag"] = chooseTags
        createQuestion(obj)
        .then(value=>
            {
                setFormData(value)
                NotificationManager.success('Success message', 'Title here');
            }
        )
    }
    const _handleSetCorrect = (e)=>{
        setCorrect(e.target.value)
    }
    const _handleSetLOD = (e)=>{
        setLevel(e.target.value)
    }

    useEffect(()=>{
        getTags()
        .then(data=>{
            setTags(data)
        })
    },[setTags])

    const _EssayQuestion = ()=>{
        return (
            <>
            
            <Form onSubmit={_onSubmitEssay}>
                <Form.Group>
                    <p>Tags:</p>
                    <Select
                        id="id_tag"
                        name="id_tag"
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
                    <Form.Label>Question Essay</Form.Label>
                    <Input.TextArea name="question" type="text" placeholder="Essay Question..." />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Answer A</Form.Label>
                    <Input name="answerA" type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Answer B</Form.Label>
                    <Input name="answerB" type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Answer C</Form.Label>
                    <Input name="answerC" type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Answer D</Form.Label>
                    <Input name="answerD" type="text" placeholder="Password" />
                </Form.Group>
                <p>True Correct</p>
                <Form.Control size="sm" as="select" value={correct} id="correct_answer" name="correct_answer" defaultValue="1" style={{ width: 150 }} onChange={_handleSetCorrect}>
                    <option value="1">Anwer A</option>
                    <option value="2">Anwer B</option>
                    <option value="3">Anwer C</option>
                    <option value="4">Anwer D</option>
                </Form.Control>
                <Form.Label>Level:</Form.Label>
                <Form.Control size="sm" as="select" value={level}  id="LOD" name="LOD" defaultValue="1" style={{ width: 150 }} onChange={_handleSetLOD}>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                </Form.Control>
                <InputComponent type="submit" className="mt-3 ml-2" type="submit" text="Create Question"/>
            </Form>
            </>
        )
    } 

    const format = 'mm:ss';
    const _MulQuestion = ()=>{
        return (
            <>
            <Form onSubmit={_onSubmitMul}>
                <Form.Group>
                    <p>Tags:</p>
                    <Select
                        id="id_tag"
                        name="id_tag"
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
                        <Form.Label>Question Mul</Form.Label>
                        <Input.TextArea name="question" type="text" placeholder="Mul Question...." />
                </Form.Group>
                <Form.Group>
                        <Form.Label>Timer</Form.Label>
                        <TimePicker name="time" className="ml-3" defaultValue={moment('00:00', format)} format={format} />
                </Form.Group>
                <Form.Group>
                        <Form.Label>Score</Form.Label>
                        <Input name="score" type="number" placeholder="Mul Question...." />
                </Form.Group>
                <Form.Label>Level:</Form.Label>
                <Form.Control size="sm" as="select" custom value={valueSelect} name="LOD" style={{ width: 150 }} onChange={_onChange}>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                </Form.Control>
                <InputComponent type="submit" className="mt-3 ml-2" type="submit" text="Create Question"/>
            </Form>
            </>
        )
    }



    return (
        <>
        {_optionQuestion()}
                {
                    selectValue == 0 ? _EssayQuestion() : _MulQuestion()
                }
        </>
    )
}
export default CreateQuestion;