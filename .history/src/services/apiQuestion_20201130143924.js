import {API} from '../config'

export const createEssayQuestion = (obj) =>{
    return fetch(`${API}/questions/createquestion`,{
        method:"POST",
        "Content-Type": "application/json",
        body:JSON.stringify(obj)
    })
        .then(res=>{
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
}

export const getAllQuestion = ()=>{
    return fetch(`${API}/questions/getquestions`,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>{
        console.log(err)
    })
}   