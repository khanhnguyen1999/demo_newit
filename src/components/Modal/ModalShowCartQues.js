import React,{useEffect,useContext,useState} from 'react'

import {AppContext} from '../../context/AppContext'

import { Modal, Input } from 'antd';


import { useToasts } from 'react-toast-notifications'


import {randomQuestion,getQuestionById} from '../../services/apiQuestion'

const ModalShowCartQues = ()=>{

    const {modalShowQuestion,_hideModalQuestion,_removeAddedQuestion} = useContext(AppContext)
    const [questions,setQuestions]=useState([])
    const [questionRandom,setQuestionRandom]=useState([])
    const [limitRandom,setLimitRandom]=useState(10)

    const { addToast } = useToasts()

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("QUESTION"))
        setQuestions(...questions,data)
    },[modalShowQuestion])


    const _handleLimit = (e)=>{
        setLimitRandom(e.target.value)
    }

    const _handleRandom = async ()=>{
        const arr = []
        setQuestions([])
        await randomQuestion(limitRandom)
            .then( async v=>{
            return await v.map(async(item)=>{
                    // const ques_random = 
                    arr.push(await getQuestionById(item.question))
                    localStorage.setItem("QUESTION_RANDOM",JSON.stringify(arr))
                    console.log("Ar ",arr)
                    return arr
                })
            })
            .then(() => addToast('Random Questions to the cart!', {
                appearance: 'success',
                autoDismiss: true,
                pauseOnHover: true,
            }))
        // console.log("Arr ",arr)
        setQuestionRandom(arr)
        _removeAddedQuestion()
    }

    useEffect(()=>{
        console.log("ques ",questionRandom)
    },[setQuestionRandom])
    
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