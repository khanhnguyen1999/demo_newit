import React,{useState,useEffect,useContext} from 'react'

import {getAllQuestion,getQuestionById} from '../../../services/apiQuestion'

import { Table, Tag, Space,Select } from 'antd';

import {Button} from 'antd'
import {ShoppingCartOutlined} from "@ant-design/icons"

import {AppContext} from '../../../context/AppContext'

const ListQuestionCreateExam = ()=>{

    const [questions,setQuestions]=useState([])
    const [quesToCart,setQuesToCart]=useState([])
    const [filter,setFilter]=useState([])
    const [selectValue,setSelectValue]=useState("")
    const {_getData,_getId,_showModalQues,_showModalUpdateQues,_getIdQues,_showModalQuestion} = useContext(AppContext)

    useEffect(()=>{
        getAllQuestion()
        .then(data=>{
          _getData(data)
          setQuestions(data)
        })
    },[_getData])

    const _handleDeleteQues = (id)=>{
      _getId(id)
      _showModalQues()
    }
    const _handleUpdateQues = (id)=>{
      _getIdQues(id)
      _showModalUpdateQues()
    }
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
                  <Button onClick={()=>_handleAddQuestion(id._id)} variant="light" className="mr-2 mb-2">Add to Exams</Button>
                </form>)
        },  
      ];

      const _handleAddQuestion = async (id)=>{
        const ques = await getQuestionById(id)
        setQuesToCart([...quesToCart,ques])
      }
      // console.log("question to cart ",quesToCart)

      const _handleOnChange = (value)=>{
        setSelectValue(value)
    }

    useEffect(()=>{
      localStorage.setItem("QUESTION",JSON.stringify(quesToCart))
    },[_handleAddQuestion])
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
    return (
        <>
        <Select className="mb-2" defaultValue="0" style={{ width: 150 }} onChange={_handleOnChange}>
                <Select.Option value="0">All Question</Select.Option>
                <Select.Option value="1">Essay Question</Select.Option>
                <Select.Option value="2">Mul Question</Select.Option>
        </Select>
        <Button onClick={()=>_showModalQuestion()}><ShoppingCartOutlined /> Cart Questions</Button>
        <Table columns={columns} dataSource={filter} />
        </>
    )
}
export default ListQuestionCreateExam