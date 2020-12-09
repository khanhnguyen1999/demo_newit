import React,{useEffect,useState} from 'react'


import {useParams} from 'react-router-dom'

import {getQuestionById} from '../../../services/apiQuestion'

const ViewMoreQuestion = ()=>{

    const [item,setItem]=useState([])
    const [data,setData]=useState([])

    const {id} = useParams()

    const check = async ()=> {
        return data.map(async (x)=>{
           return await x.list_question.map(async(c,index)=>{
            //    return console.log("c ",c.question)
            if(c.question){
                // console.log("check ",c.question._id)
                const v = await getQuestionById("5fc4a48705066531cd05c5cf")
                console.log("vv ",v)
                return v
            }
           })
        })
    }
    useEffect(()=>{
        check()
        .then(v=> Promise.all(v))
        .then(v=> {const check = v.map((item,index)=>{
            return Promise.resolve(i=>i)
        }
        
        )
        console.log("v ",check)
        })
        // .then(v => Promise.resolve(v).then(value=>console.log("check value ",value)))
        // .catch(err => console.error(err));
    },[setItem,check])
    // console.log()

    useEffect(()=>{
       const items = JSON.parse(localStorage.getItem('exams')).filter(item=>item._id===id)
       setData(items)
    },[setData,id])

  
    // console.log("items ",item)

    return (
        <>
            {item.length>0 && item.map((value,index)=>{
                return (
                    // <div key={index}>
                    //     <h1>{value.nameExam}</h1>
                    //     <h3>List Questions</h3>
                    //     <p>{
                    //         value.list_question.length>0 && value.list_question.map((list,index)=>{
                    //             console.log("questions ",list.question)
                    //             return (
                    //                 <div key={index}>
                    //                     {list._id}
                    //                 </div>
                    //             )
                    //         })
                    //     }</p>
                    //     <h3>List Candidates</h3>
                    //     <p>{
                    //         value.list_can.length>0 && value.list_can.map((list,index)=>{
                    //             return (
                    //                 <div key={index}>
                    //                     {list._id}
                    //                 </div>
                    //             )
                    //         })
                    //     }</p>
                    // </div>
                    <h1 key={index}>123</h1>
                )
                })
            }
        </>
    )
}
export default ViewMoreQuestion