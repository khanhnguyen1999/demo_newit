import React,{useState,useEffect} from 'react'
import {Form} from 'react-bootstrap'
import { Select, Radio } from 'antd';

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
    console.log("select value ",selectValue)
    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Select.Option key={i.toString(36) + i}>{i.toString(36) + i}</Select.Option>);
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
    },[tags])
    console.log("data tag ",tags)
    const _EssayQuestion = ()=>{
        return (
            <Form onSubmit={_onSubmitEssay}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Question Essay</Form.Label>
                    <InputComponent type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
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
                <InputComponent type="submit" text="Create Question" />
            </Form>
        )
    } 

    const _MulQuestion = ()=>{
        return (
            <Form onSubmit={_onSubmitMul}>
                <Form.Group controlId="formBasicPassword">
                        <Form.Label>Question Mul</Form.Label>
                        <Input.TextArea type="text" placeholder="Password" />
                </Form.Group>
                <ButtonComponent type="submit" text="Create Question"/>
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
            defaultValue={['a10', 'c12']}
            onChange={handleChange}
            style={{ width: '100%' }}
        >
            {children}
        </Select>
                {
                    selectValue == 0 ? _EssayQuestion() : _MulQuestion()
                }
        </>
    )
}
export default CreateQuestion;