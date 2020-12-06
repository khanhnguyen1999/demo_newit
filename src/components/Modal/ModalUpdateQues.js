import React,{useContext,useState,useEffect} from 'react'
import {Modal,Button,FormControl} from 'react-bootstrap'
import {AppContext} from '../../context/AppContext'
import {Form} from 'react-bootstrap'
import { Select,TimePicker } from 'antd';
import {Input} from 'antd'
import InputComponent from '../../components/InputComponent'
import moment from 'moment';

const UpdateMul = ()=>{
    const {_hideModalUpdateQues,modalUpdateQues} = useContext(AppContext)
    const format = 'mm:ss';
    return(
        <Modal show={modalUpdateQues}>
            <Modal.Header closeButton onClick={_hideModalUpdateQues}>
                <Modal.Title>Update Mul</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <p>Tags:</p>
                        <Select
                            id="id_tag"
                            name="id_tag"
                            mode="multiple"
                            placeholder="Please select"
                            defaultValue={[]}
                            // onChange={handleChange}
                            style={{ width: '100%' }}
                        >
                            {/* {children} */}1
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
                    <Form.Control size="sm" as="select" custom name="LOD" style={{ width: 150 }} >
                        <option value="1">Level 1</option>
                        <option value="2">Level 2</option>
                        <option value="3">Level 3</option>
                    </Form.Control>
                    <InputComponent type="submit" className="mt-3 ml-2" type="submit" text="Create Question"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={_hideModalUpdateQues}>
                        Close
                    </Button>
                    <Button variant="danger">
                        Save Item
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}

const UpdateEssay = ()=>{
    const {_hideModalUpdateQues,modalUpdateQues} = useContext(AppContext)
    return (
    <Modal show={modalUpdateQues}>
        <Modal.Header closeButton onClick={_hideModalUpdateQues}>
            <Modal.Title>Update Essay</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
                <Form.Group>
                    <p>Tags:</p>
                    <Select
                        id="id_tag"
                        name="id_tag"
                        mode="multiple"
                        placeholder="Please select"
                        defaultValue={[]}
                        // onChange={handleChange}
                        style={{ width: '100%' }}
                    >
                        {/* {children} */}1
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
                <Form.Control size="sm" as="select" id="correct_answer" name="correct_answer" defaultValue="1" style={{ width: 150 }}>
                    <option value="1">Anwer A</option>
                    <option value="2">Anwer B</option>
                    <option value="3">Anwer C</option>
                    <option value="4">Anwer D</option>
                </Form.Control>
                <Form.Label>Level:</Form.Label>
                <Form.Control size="sm" as="select"  id="LOD" name="LOD" defaultValue="1" style={{ width: 150 }} >
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                </Form.Control>
                <InputComponent type="submit" className="mt-3 ml-2" type="submit" text="Create Question"/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={_hideModalUpdateQues}>
                    Close
                </Button>
                <Button variant="danger">
                    Save Item
                </Button>
        </Modal.Footer>
    </Modal>
    )
}


const ModalUpdateQues = ()=>{

    const [value,setValue]=useState(false)
    const {data,getIdQues} = useContext(AppContext)
    useEffect(()=>{
        console.log("data ",data,getIdQues)
        const list = data.filter(item=>{
            return item._id===getIdQues
        })
        list.filter(item=>{
            console.log("item ",item.type)
            if(item.type==="Mul"){
                return setValue(false)
            }
            else{
                return setValue(true)
            }
        })
        // console.log("check ",check)
        // check?setValue(true):setValue(false)
    },[getIdQues])
    console.log("damne ",value)
    return (
        <>
        {value?UpdateEssay():UpdateMul()}
        </>
    )
}
export default ModalUpdateQues