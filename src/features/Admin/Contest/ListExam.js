import React,{useState,useEffect,useContext} from 'react'
import { Table,Select } from 'antd';
import {Button} from 'antd'

import {getAllExam} from '../../../services/apiExam'
import {getUserNameById} from '../../../services/apiUser'

import {Link} from 'react-router-dom'

import {AppContext} from '../../../context/AppContext'

const ListExam = ()=>{

    const [selectValue,setSelectValue]=useState("")
    const [data,setData]=useState([])
    const [data1,setData1]=useState([])
    const [filter,setFilter]=useState([])


    const {_getId} = useContext(AppContext)

    const columns = [
        {
        title: 'Name Exam',
        dataIndex: 'nameExam',
        key: 'nameExam',
        render: text => <a>{text}</a>,
        },
        {
            title: 'User Create Exam',
            dataIndex: 'id_user',
            key: 'id_user',
        },
        {
            title: 'Action',
            render: (id) => (
                <form key={id._id}>
                <Button onClick={()=>{_getId(id._id)}} variant="light" className="mr-2 mb-2">
                    <Link to={`/contest/viewquestion/${id._id}`}>
                        View
                    </Link>
                </Button>
                <Button onClick={()=>{}} type="danger" text="Delete">Delete</Button>
                </form>)
        },  
    ];

    async function check() {
        return data.map(async (x)=>{
            const v = await getUserNameById(x.id_user)
            return {
                ...x,
                id_user: v
            }
        })
    }

    useEffect(()=>{
        getAllExam()
        .then(data=>
            setData(data)    
        )
    },[setData])


    useEffect(()=>{
        localStorage.setItem("exams",JSON.stringify(data));
    },[data])
   
    useEffect(()=>{
        check()
        .then(v => Promise.all(v))
        .then(v => setFilter(v))
        .catch(err => console.error(err));
    },[setFilter,data])

    return (
        <>
        {/* <ListQuestion/> */}
         <Table columns={columns} dataSource={filter} />
       </>
    )
}
export default ListExam