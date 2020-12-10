import React,{useEffect,useContext,useState} from 'react'

import {AppContext} from '../../context/AppContext'

import { Modal, Button, Input } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import {randomQuestion,getQuestionById} from '../../services/apiQuestion'

const ModalShowCartQues = ()=>{

    const {modalShowQuestion,_hideModalQuestion} = useContext(AppContext)
    const [questions,setQuestions]=useState([])
    const [questionRandom,setQuestionRandom]=useState([])
    const [limitRandom,setLimitRandom]=useState(10)

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("QUESTION"))
        setQuestions(...questions,data)
    },[modalShowQuestion])


    const _handleLimit = (e)=>{
        setLimitRandom(e.target.value)
    }

    const _handleRandom =  ()=>{
        const arr = []
        setQuestions([])
        randomQuestion(limitRandom)
        .then( v=>{
            v.map(async(item)=>{
                const check = await getQuestionById(item.question)
                arr.push(check)
            })
        })
        setQuestionRandom(arr)
    }

    
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
          <p>Limit Random</p>
          <Input min="10" max="50" onChange={_handleLimit} type="number"/>
        </Modal>
      </>
    );
}


export default ModalShowCartQues