import React,{useState} from 'react'
import CreateQuestion from './CreateQuestion'
import {Button} from 'antd'
import ListQuestion from './ListQuestion'

const Question = ()=>{
    const [toggle,setToggle]=useState(false)

    const _handleToggle = ()=>{
        setToggle(!toggle)
    }
    return (
        <>
            <Button variant="outline-success" className="d-block mb-4" type="button" onClick={_handleToggle} >Create Question</Button>
            {
                toggle?<CreateQuestion/>:null
            }
            <h2 className="text-center mt-5">Questions</h2>
            <ListQuestion/>
        </>
    )
}
export default Question