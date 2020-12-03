import React,{useState,useContext} from 'react'
import {AppContext} from '../../../context/AppContext'



const QuestionContest = ()=>{
    const {data} = useContext(AppContext)
    console.log("data",data)
    return (
        <h2>Kanh</h2>
    )
}
export default QuestionContest