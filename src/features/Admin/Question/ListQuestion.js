import React,{useState,useEffect,useContext} from 'react'
import {getAllQuestion} from '../../../services/apiQuestion'
import { Table, Tag, Space,Select } from 'antd';
import {Button} from 'antd'
import {AppContext} from '../../../context/AppContext'


const ListQuestion = ()=>{
    const [questions,setQuestions]=useState([])
    const [filter,setFilter]=useState([])
    const [selectValue,setSelectValue]=useState("")
    const {_getData,_getId,_showModalQues,_showModalUpdateQues,_getIdQues} = useContext(AppContext)

    useEffect(()=>{
        getAllQuestion()
        .then(data=>{
          _getData(data)
          localStorage.setItem("questions",data)
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
                  <Button onClick={()=>_handleUpdateQues(id._id)} variant="light" className="mr-2 mb-2">Edit</Button>
                  <Button onClick={()=>_handleDeleteQues(id._id)} type="danger" text="Delete">Delete</Button>
                </form>)
        },  
      ];


    const _handleOnChange = (value)=>{
        setSelectValue(value)
    }
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
        <Table columns={columns} dataSource={filter} />
      </>
    )
}
export default ListQuestion