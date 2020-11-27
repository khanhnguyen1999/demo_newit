import {API} from '../config'

export const createEssayQuestion = (data) =>{
    console.log("api ",JSON.stringify(tagName))
    return fetch(`${API}/questions/createquestion`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(data)
    })
        .then(res=>{
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
}