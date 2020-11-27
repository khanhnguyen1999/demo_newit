import React,{useEffect,useState} from 'react'
import { Button } from 'antd';

const ButtonComponent = ({
        text,
        type,
        onToggle,
        className,
        handleEssay
    })=>{
    const [toggle,setToggle]=useState(false)
    const _onToggle = ()=>{
        setToggle(!toggle)
    }
    useEffect(()=>{
        onToggle && typeof onToggle === "function" && onToggle(toggle)
    },[toggle])

    return (
        <Button className={className} onClick={_onToggle} type={type}>{text}</Button>
    )
};
export default ButtonComponent;