import React from 'react'
import {Form} from 'react-bootstrap'
// import Input 
import InputComponent from '../../../components/InputComponent'
import ButtonComponent from '../../../components/ButtonComponent'

const CreateUser = ()=>{
    return (
        <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <InputComponent type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>User name</Form.Label>
                    <InputComponent type="text" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <InputComponent type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputComponent type="password" placeholder="Password" />
                </Form.Group>
                <ButtonComponent type="primary" text="Create User"/>
            </Form>
        </>
    )
}
export default CreateUser;