import {API} from '../config'

export const createEssayQuestion = (tagName) =>{
    console.log("api ",JSON.stringify(tagName))
    return fetch(`${API}/tags/createtag`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(tagName)
    })
        .then(res=>{
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
}