import React,{useState} from 'react'
import CreateQuestion from './CreateQuestion'
import {Button} from 'react-bootstrap'

const Question = ()=>{
    const [toggle,setToggle]=useState(false)

    const _handleToggle = ()=>{
        setToggle(!toggle)
    }
    return (
        <>
            <Button className="d-block mb-4" type="button" onClick={_handleToggle} >Create Question</Button>
            {
                toggle?<CreateQuestion/>:null
            }
        </>
    )
}
export default Question