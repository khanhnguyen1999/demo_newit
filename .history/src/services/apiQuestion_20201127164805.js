import {API} from '../config'

export const createEssayQuestion = (data) =>{
    // console.log("api ",JSON.stringify(tagName))
    console.log("data question ",data.get("answerA"))
    return fetch(`${API}/questions/createquestion`,{
        method:"POST",
        "Content-Type": "application/x-www-form-urlencoded",
        body:data
    })
        .then(res=>{
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
}