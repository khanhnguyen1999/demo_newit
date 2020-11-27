import React,{useState,useEffect} from 'react'
import {Form} from 'react-bootstrap'
import moment from 'moment';
import { Select, Radio,TimePicker } from 'antd';

import {getTags} from '../../../services/apiTag'
import {createEssayQuestion} from '../../../services/apiQuestion'

import {Input} from 'antd'
// import { Select } from 'antd';
// import Input 
import InputComponent from '../../../components/InputComponent'
import ButtonComponent from '../../../components/ButtonComponent'

const CreateQuestion = ()=>{

    const [selectValue,setSelectValue]=useState(0)
    const [selectAnswer,setSelectAnswer]=useState(0)
    const [tags,setTags]=useState([])
    const [formData,setFormData]=useState([])

    const _handleOnChange = (value)=>{
        setSelectValue(value)
    }
    console.log("select value ",selectValue)
    const children = [];
    for (let i = 0; i < tags.length; i++) {
        children.push(<Select.Option key={tags[i]._id}>{tags[i].tagName}</Select.Option>);
        console.log("tags ",tags[i]._id)
    }

    function handleChange(e) {
        console.log(`Selected: ${e}`);
    }

    const SelectSizesDemo = () => {
    const [size, setSize] = useState('default');

    const handleSizeChange = e => {
        setSize(e.target.value);
    };
    }


    const _optionQuestion = ()=>{
        return (
            <Select defaultValue="0" style={{ width: 150 }} onChange={_handleOnChange}>
                <Select.Option value="0">Essay Question</Select.Option>
                <Select.Option value="1">Mul Question</Select.Option>
            </Select>
        )
    }
    const _handleOnChangeAnswer = (value)=>{
        setSelectAnswer(value)
        console.log("onchange ",value)
    }
    const [value,setValue]=useState(0)
    const _onSubmitEssay = (e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        data.append("question",data.get("question"))
        data.append("answerA",data.get("answerA"))
        data.append("answerB",data.get("answerB"))
        data.append("answerC",data.get("answerC"))
        data.append("type","Essay")
        data.append("score",null)
        data.append("answerD",data.get("answerD"))
        data.append("correct_answer",data.get("correct_answer"))
        data.append("LOD",data.get("LOD"))
        createEssayQuestion(data)
        .then(data=>
            {
                setFormData(data)
                console.log("done")
            }
        )
        // console.log("data question ",data)

    }
    const _onSubmitMul = ()=>{
        console.log("")
    }

    useEffect(()=>{
        getTags()
        .then(data=>{
            setTags(data)
        })
    },[setTags])
    console.log("data tag ",tags)

    const _EssayQuestion = ()=>{
        return (
            <>
            
            <Form onSubmit={_onSubmitEssay}>
            <p>Tags:</p>
            <Select
                mode="multiple"
                placeholder="Please select"
                defaultValue={[]}
                onChange={handleChange}
                style={{ width: '100%' }}
            >
                {children}
            </Select>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Question Essay</Form.Label>
                    <Input.TextArea id="question" name="question" type="text" placeholder="Essay Question..." />
                </Form.Group>
                <Form.Group id="1" controlId="formBasicPassword">
                    <Form.Label>Answer A</Form.Label>
                    <InputComponent id="answerA" name="answerA" type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group id="2" controlId="formBasicPassword">
                    <Form.Label>Answer B</Form.Label>
                    <InputComponent id="answerB" name="answerB" type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group id="3" controlId="formBasicPassword">
                    <Form.Label>Answer C</Form.Label>
                    <InputComponent id="answerC" name="answerC" type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group id="4" controlId="formBasicPassword">
                    <Form.Label>Answer D</Form.Label>
                    <InputComponent id="answerD" name="answerD" type="text" placeholder="Password" />
                </Form.Group>
                <p>True Correct</p>
                <Select id="correct_answer" name="correct_answer" defaultValue="1" style={{ width: 150 }} onChange={_handleOnChangeAnswer}>
                    <Select.Option value="1">Anwer A</Select.Option>
                    <Select.Option value="2">Anwer B</Select.Option>
                    <Select.Option value="3">Anwer C</Select.Option>
                    <Select.Option value="4">Anwer D</Select.Option>
                </Select>
                <Form.Label>Level:</Form.Label>
                <Select id="LOD" name="LOD" defaultValue="1" style={{ width: 150 }} onChange={_handleOnChangeAnswer}>
                    <Select.Option value="1">Level 1</Select.Option>
                    <Select.Option value="2">Level 2</Select.Option>
                    <Select.Option value="3">Level 3</Select.Option>
                </Select>
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
                <Form.Group controlId="formBasicPassword">
                        <Form.Label>Question Mul</Form.Label>
                        <Input.TextArea type="text" placeholder="Mul Question...." />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                        <Form.Label>Timer</Form.Label>
                        <TimePicker className="ml-3" defaultValue={moment('00:00', format)} format={format} />
                </Form.Group>
            </Form>
            <Form.Label>Level:</Form.Label>
                <Select defaultValue="1" style={{ width: 150 }} onChange={_handleOnChangeAnswer}>
                    <Select.Option value="1">Level 1</Select.Option>
                    <Select.Option value="2">Level 2</Select.Option>
                    <Select.Option value="3">Level 3</Select.Option>
                </Select>
            <ButtonComponent className="mt-3 ml-2" type="submit" text="Create Question"/>
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