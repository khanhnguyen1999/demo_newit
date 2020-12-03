import React,{useState,useEffect,useContext} from 'react'
import {getAllQuestion} from '../../../services/apiQuestion'
import { Table, Tag, Space,Select } from 'antd';
import {Button} from 'react-bootstrap'
import {AppContext} from '../../../context/AppContext'


const ListQuestion = ()=>{
    const [questions,setQuestions]=useState([])
    const [selectValue,setSelectValue]=useState("")
    const {_getData,_getId,_showModalQues} = useContext(AppContext)
    // console.log("get ",test)
    useEffect(()=>{
        getAllQuestion()
        .then(data=>{
          _getData(data)
          setQuestions(data)
        })
    },[])

    const _handleDeleteQues = (id)=>{
      console.log("id ques ",id)
      _getId(id)
      _showModalQues()
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
                  <Button variant="light" className="mr-2 mb-2">Edit</Button>
                  <Button onClick={()=>_handleDeleteQues(id._id)} variant="danger" type="button" text="Delete">Delete</Button>
                </form>)
        },  
      ];


      const _handleOnChange = (value)=>{
        setSelectValue(value)
    }
    useEffect(()=>{
      console.log("select ",selectValue)
      if(selectValue==1){
        const list = questions.filter((x)=>{
          return x.type === "Essay"
        })
        console.log("list ",list)
        setQuestions(list)
      }
      if(selectValue==2){
        const list = questions.filter((x)=>{
          return x.type === "Mul"
        })
        console.log(list)
        setQuestions(list)
      }
    },[])
    return (
      <>
       <Select defaultValue="0" style={{ width: 150 }} onChange={_handleOnChange}>
                <Select.Option value="0">All Question</Select.Option>
                <Select.Option value="1">Essay Question</Select.Option>
                <Select.Option value="2">Mul Question</Select.Option>
        </Select>
        <Table columns={columns} dataSource={questions} />
      </>
    )
}
export default ListQuestion