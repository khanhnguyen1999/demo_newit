import {API} from '../config'

export const createEssayQuestion = (data) =>{
    // console.log("api ",JSON.stringify(tagName))
    console.log("data question ",data.get("id_tag"))
    return fetch(`${API}/questions/createquestion`,{
        method:"POST",
        "Content-Type": "application/json",
        body:data
    })
        .then(res=>{
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
}