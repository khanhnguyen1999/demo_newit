import React,{useState,useEffect} from 'react'
import {Form} from 'react-bootstrap'

import ListExam from './ListExam'

import {createExam} from '../../../services/apiExam'

import { Select } from 'antd';
import {getAllCandidate} from '../../../services/apiCandidate'
import {Link} from 'react-router-dom'


const Contest = ()=>{

    const [tags,setTags]=useState([])
    const [formData,setFormData]=useState([])
    const [chooseTags,setChooseTags]=useState([{
        can:null
    }])

    function handleChange(e) {
        setChooseTags(convert(e))
    }
    function convert(arr){
        const a1 = []
        for(var i=0;i<arr.length;i++){
            a1.push({
            "can":arr[i]
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

    const _onSubmit = (e)=>{
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        data.append("nameExam",data.get("nameExam"))
        var obj = {};
        var formData = data;
        for (var key of formData.keys()) {
            obj[key] = formData.get(key);
        }
        obj["id_user"] = "5fbe1363a76a1f265023c2a0";
        obj["list_can"] = chooseTags;
        createExam(obj)
        .then(value=>
            {
                setFormData(value)
            }
        )
    }

    return (
        <>
            <h1 className="text-center">Create Contest</h1>
            <button id="create_contest" type="submit">
                <Link to="/contest/createexam">
                    Create Contest
                </Link>
            </button>
            <h1 className="text-center">List Exams</h1>
            <ListExam/>
        </>
    )
}
export default Contest