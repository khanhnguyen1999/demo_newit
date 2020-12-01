import React,{useState,useEffect} from 'react'
import {getAllQuestion} from '../../../services/apiQuestion'
import { Table, Tag, Space } from 'antd';
import {Button} from 'react-bootstrap'


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
        },
        {
            title: 'Action',
            render: (id) => (
                <form key={id._id}>
                  <Button  className="mr-2 mb-2">Edit</Button>
                  <Button variant="danger" type="button" text="Delete">Delete</Button>
                </form>)
        },  
      ];
    return (
        <Table columns={columns} dataSource={questions} />
    )
}
export default ListQuestion