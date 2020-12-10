import React,{useEffect,useState} from 'react'


import {useParams} from 'react-router-dom'

// import {getQuestionById} from '../../../services/apiQuestion'

import {Table} from 'antd'

const ViewMoreQuestion = ()=>{

    const [item,setItem]=useState([])
    const [data,setData]=useState([])
    const [questions,setQuestions]=useState([])
    const [cans,setCans]=useState([])

    const {id} = useParams()

    const list_Ques = []

    const getQuestion = async ()=> {
        return await data.map(async(x)=>{
            await x.list_question.map(async(c,index)=>{
                return await list_Ques.push(c.question)
            })
        }
        )
    }

    const list_Cans = []
    const getCans = async ()=> {
        return await data.map(async(x)=>{
            await x.list_can.map(async(c,index)=>{
                return await list_Cans.push(c.can)
            })
        }
        )
    }

    useEffect(()=>{
        getQuestion()
        setQuestions(list_Ques)
        getCans()
        setCans(list_Cans)
    },[getQuestion,getCans])
    // console.log()

    useEffect(()=>{
       const items = JSON.parse(localStorage.getItem('exams')).filter(item=>item._id===id)
       setData(items)
    },[setData,id])

  
    // console.log("items ",item)

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        }
    ]

    return (
        <>
            <h1>List Questions</h1>
            {questions.length>0 && questions.map((value,index)=>{
                if(value?.question!==null){
                    return (
                        <div key={index}>
                            <p>{index+1}</p>
                            <p>{value?.question}</p>
                        </div>
                        
                    )}
                })
            }
            <h1>List Candidates</h1>
            {cans.length>0 && cans.map((value,index)=>{
                console.log("value ",value)
                if(value?.can_email!==null){
                    return (
                        <div key={index}>
                            <p>{index+1}</p>
                            <p>{value?.can_email}</p>
                        </div>
                       
                        
                    )}
                })
            }
        </>
    )
}
export default ViewMoreQuestion