import React,{useState,useEffect} from 'react'
import {Input} from 'antd'

const InputComponent = ({text,type,handleChange,className,placeholder,id,name})=>{
    const [value,setValue]=useState("")
    const _onChange = (e)=>{
        setValue(e.target.value)
    }
    // console.log("check id ",id,name)
    useEffect(()=>{
        handleChange && typeof handleChange === "function" && handleChange(value)
    },[value])
    return (
        <Input
            id={id}
            name={name}
            className={className}
            placeholder={placeholder}
            onChange={_onChange}
            type={type}
            value={text}
        />
    )
}
export default InputComponent