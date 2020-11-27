import {API} from '../config'

export const createEssayQuestion = (data) =>{
    // console.log("api ",JSON.stringify(tagName))
    return fetch(`${API}/questions/createquestion`,{
        method:"POST",
            "Content-Type": "multipart/form-data",
        body:data
    })
        .then(res=>{
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
}