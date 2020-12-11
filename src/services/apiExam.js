import {API} from '../config'

export const createExam = (obj) =>{
    return fetch(`${API}/exams/createexam`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(obj)
    })
        .then(res=>{
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
}

export const getAllExam = ()=>{
    return fetch(`${API}/exams/getexams`,{
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

export const deleteExam = (id)=>{
    return fetch(`${API}/exams/deleteexam/${id}`,{
        method:"POST",
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