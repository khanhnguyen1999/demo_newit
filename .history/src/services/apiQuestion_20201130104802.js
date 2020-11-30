import {API} from '../config'

export const createEssayQuestion = (obj) =>{
    // console.log("api ",JSON.stringify(tagName))
    // console.log("data question ",data.get("id_tag"))
    console.log("obj fetch ",obj)
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