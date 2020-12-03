
import {API} from '../config'

export const createTag = (tagName) =>{
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
    return fetch(`${API}/tags/gettags`,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res=>{
            return res.json()
        })
        .catch(err=>{
            console.log(err)
        })
}

export const deleteTag = (id) =>{
    return fetch(`${API}/tags/deletetag/${id}`,{
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
export const updateTag = (id,data) =>{
    console.log(id,data)
    return fetch(`${API}/tags/updatetag/${id}`,{
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