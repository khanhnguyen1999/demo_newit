import React,{useEffect,useContext,useState} from 'react'

import {AppContext} from '../../context/AppContext'

import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import {randomQuestion,getQuestionById} from '../../services/apiQuestion'

const ModalShowCartQues = ()=>{

    const {modalShowQuestion,_hideModalQuestion} = useContext(AppContext)
    const [questions,setQuestions]=useState([])
    const [questionRandom,setQuestionRandom]=useState([])

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("QUESTION"))
        setQuestions(...questions,data)
    },[modalShowQuestion])


    const _handleRandom =  ()=>{
        const arr = []
        setQuestions([])
        randomQuestion(10)
        .then( v=>{
            v.map(async(item)=>{
                const check = await getQuestionById(item.question)
                arr.push(check)
            })
        })
        setQuestionRandom(arr)
    }

    useEffect(()=>{
        console.log("question ",questionRandom)
    },[questionRandom])
    // console.log("random ",questionRandom)
    return (
      <>
        <Modal
          title="Cart Questions"
          visible={modalShowQuestion}
          onOk={_handleRandom}
          onCancel={_hideModalQuestion}
          okText="Random Questions"
          cancelText="Cancel"
        >
          {
            questions.length>0?
            questions.map((value,index)=>{
                return (
                    <div key={index}>
                        <p>{index+1}</p>
                        <p1>{value.question}</p1>
                        <hr/>
                    </div>
                )
            })
            :   
              questionRandom.length > 0 && questionRandom.map((value,index)=>{
                  return (
                      <div key={index}>
                          <p>{index+1}</p>
                          <p1>{value.question}</p1>
                          <hr/>
                      </div>
                  )
              })
          }
        </Modal>
      </>
    );
}


export default ModalShowCartQues