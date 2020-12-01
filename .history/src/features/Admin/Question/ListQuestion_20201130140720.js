import React,{useState,useEffect} from 'react'
import {getAllQuestion} from '../../../services/apiQuestion'
import { Table, Tag, Space } from 'antd';

const ListQuestion = ()=>{
    const [questions,setQuestions]=useState([])
    useEffect(()=>{
        getAllQuestion()
        .then(data=>setQuestions(data))
    },[])

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
        }
      ];
    return (
        <Table columns={columns} dataSource={questions} />
    )
}
export default ListQuestion