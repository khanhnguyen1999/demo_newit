import React from 'react'
import {Form} from 'react-bootstrap'
import QuestionContest from './QuestionContest'

const Contest = ()=>{
    return (
        <>
            <h1>Create Contest</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Tag Name</Form.Label>
                    <input type="text" placeholder="Enter Tag name..." />
                </Form.Group>
                <input type="submit" text="Create Tag"/>
            </Form>
            <QuestionContest/>
        </>
    )
}
export default Contest