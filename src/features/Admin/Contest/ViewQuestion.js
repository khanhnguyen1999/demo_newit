import React,{useContext,useEffect,useState} from 'react'

import {AppContext} from '../../../context/AppContext'

import {getAllExam} from '../../../services/apiExam'

const ViewMoreQuestion = ()=>{

    const {getId} = useContext(AppContext)
    const [data,setData]=useState([])
    const [item,setItem]=useState()

    useEffect(()=>{
        getAllExam()
        .then(data=>setData(data))
    },[setData])

    useEffect(()=>{
        // console.log(getId,data)
        const items = data.filter(item=>item._id===getId)
        console.log("items ",items)
        setItem(items)
    },[data,setItem,getId])
    console.log("item ",item)
    return (
        <>
            <h1>check</h1>
        </>
    )
}
export default ViewMoreQuestion