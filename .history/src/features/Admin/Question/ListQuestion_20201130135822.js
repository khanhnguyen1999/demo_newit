import React,{useState,useEffect} from 'react'
import getAllQuestion from '../../../services/apiQuestion'

const ListQuestion = ()=>{
    const [questions,setQuestions]=useState([])
    useEffect(()=>{
        getAllQuestion()
        .then(data=>setQuestions(data))
    },[])
    console.log("check ",questions)
    return (
        <h1>Khanh</h1>
    )
}
export default ListQuestion