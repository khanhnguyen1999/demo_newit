import React,{useState,useEffect} from 'react'
import {Form} from 'react-bootstrap'
import moment from 'moment';
import { Select, Radio,TimePicker } from 'antd';

import {getTags} from '../../../services/apiTag'
import {Input} from 'antd'
// import { Select } from 'antd';
// import Input 
import InputComponent from '../../../components/InputComponent'
import ButtonComponent from '../../../components/ButtonComponent'

const CreateQuestion = ()=>{

    const [selectValue,setSelectValue]=useState(0)
    const [selectAnswer,setSelectAnswer]=useState(0)
    const [tags,setTags]=useState([])

    const _handleOnChange = (value)=>{
        setSelectValue(value)
    }
    const handleChangeTag = (value)=>{
        console.log("tags ",value)
    }
    console.log("select value ",selectValue)
    const children = [];
    for (let i = 0; i < tags.length; i++) {
        children.push(<Select.Option onChange={handleChangeTag} key={i}>{tags[i].tagName}</Select.Option>);
        console.log(tags[i].id)
    }

    function handleChange(value) {
        console.log(`Selected: ${value}`);
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
        console.log("checking ",e.target)
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
            <Form onSubmit={_onSubmitEssay}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Question Essay</Form.Label>
                    <Input.TextArea type="email" placeholder="Essay Question..." />
                </Form.Group>
                <Form.Group id="1" controlId="formBasicPassword">
                    <Form.Label>Answer A</Form.Label>
                    <InputComponent id="1" type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group id="2" controlId="formBasicPassword">
                    <Form.Label>Answer B</Form.Label>
                    <InputComponent id="2" type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group id="3" controlId="formBasicPassword">
                    <Form.Label>Answer C</Form.Label>
                    <InputComponent id="3" type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group id="4" controlId="formBasicPassword">
                    <Form.Label>Answer D</Form.Label>
                    <InputComponent id="4" type="text" placeholder="Password" />
                </Form.Group>
                <p>True Correct</p>
                <Select defaultValue="1" style={{ width: 150 }} onChange={_handleOnChangeAnswer}>
                    <Select.Option value="1">Anwer A</Select.Option>
                    <Select.Option value="2">Anwer B</Select.Option>
                    <Select.Option value="3">Anwer C</Select.Option>
                    <Select.Option value="4">Anwer D</Select.Option>
                </Select>
            </Form>
        )
    } 

    const _settingQuestiong = ()=>{
        return (
            <>
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
    const format = 'mm:ss';
    const _MulQuestion = ()=>{
        return (
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
        )
    }



    return (
        <>
        {_optionQuestion()}
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
                {
                    selectValue == 0 ? _EssayQuestion() : _MulQuestion()
                }
                {_settingQuestiong()}
        </>
    )
}
export default CreateQuestion;