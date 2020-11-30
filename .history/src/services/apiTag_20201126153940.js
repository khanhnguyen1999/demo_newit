
import {API} from '../config'

export const createTag = (tagName) =>{
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


export const getTags = () =>{
    // console.log("api ",JSON.stringify(tagName))
    return fetch(`${API}/tags/gettags`,{
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