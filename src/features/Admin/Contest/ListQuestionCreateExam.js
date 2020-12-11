import React,{useState,useEffect,useContext} from 'react'

import {getAllQuestion,getQuestionById} from '../../../services/apiQuestion'

import { Table,Select } from 'antd';
import { Skeleton } from 'antd';

import { useToasts } from 'react-toast-notifications'


import {Button} from 'antd'
import {ShoppingCartOutlined} from "@ant-design/icons"

import {AppContext} from '../../../context/AppContext'

const ListQuestionCreateExam = ()=>{

    const [questions,setQuestions]=useState([])
    const [quesToCart,setQuesToCart]=useState([])
    const [filter,setFilter]=useState([])
    const [selectValue,setSelectValue]=useState("")
    const {_getData,_showModalQuestion} = useContext(AppContext)

    const { addToast } = useToasts()
 
    const columns = [
        {
          title: 'Question',
          dataIndex: 'question',
          key: 'question',
          render: text => <a>{text}</a>,
        },
        {
          title: 'AnswerA',
          dataIndex: 'answerA',
          key: 'answerA',
        },
          {
          title: 'AnswerB',
          dataIndex: 'answerB',
          key: 'answerB',
        },
        {
            title: 'AnswerC',
            dataIndex: 'answerC',
            key: 'answerC',
        },
        {
            title: 'AnswerD',
            dataIndex: 'answerD',
            key: 'answerD',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
        },
        {
            title: 'Action',
            render: (id) => (
                <form key={id._id}>
                  <Button onClick={()=>_handleAddQuestion(id._id)} type="primary" danger={id.Add?false:true} className="mr-2 mb-2">{id.Add?"Add to Exams":"Added"}</Button>
                </form>)
        },  
      ];

    

    const _handleAddQuestion = async (id)=>{
     const toggleAddQues = questions.map(item => {
        if(item._id === id){
            item.Add = !item.Add
         }
       return item
      }) 
      setQuestions(toggleAddQues)

      await getQuestionById(id)
        .then(data=> setQuesToCart([...quesToCart,data]))
        .then(() => addToast('Question added to the cart!', {
          appearance: 'success',
          autoDismiss: true,
          pauseOnHover: true,
        }))
    }


    const _handleOnChange = (value)=>{
      setSelectValue(value)
    }


    useEffect(()=>{
      localStorage.setItem("QUESTION",JSON.stringify(quesToCart))
    },[quesToCart])

    useEffect(()=>{
      setFilter(questions)
      if(selectValue==1){
        const list = questions.filter((x)=>{
          return x.type == "Essay"
        })
        setFilter(list)
      }
      if(selectValue==2){
        const list = questions.filter((x)=>{
          return x.type == "Mul"
        })
        setFilter(list)
      }
    },[selectValue,questions])

    useEffect(()=>{
      getAllQuestion()
      .then(data=>{
        _getData(data)
        const arr = []
          data.map((item)=>{
            return arr.push(
            {
              ...item,
              "Add":true
            })
          })
          setQuestions(arr)
      })
  },[setQuestions])

    return (
        <>
        <Select className="mb-2" defaultValue="0" style={{ width: 150 }} onChange={_handleOnChange}>
                <Select.Option value="0">All Question</Select.Option>
                <Select.Option value="1">Essay Question</Select.Option>
                <Select.Option value="2">Mul Question</Select.Option>
        </Select>
        <Button className="ml-2" onClick={()=>_showModalQuestion()}><ShoppingCartOutlined /> Cart Questions</Button>
        <Table columns={columns} dataSource={filter}><Skeleton /></Table>
        </>
    )
}
export default ListQuestionCreateExam