import {API} from '../config'

export const createEssayQuestion = (obj) =>{
    return fetch(`${API}/questions/createquestion`,{
        method:"POST",
        "Content-Type": "application/json",
        body:obj
    })
        .then(res=>{
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
}

export const getAllQuestion = ()=>{
    return fetch(`${API}/getquestions`,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
}   