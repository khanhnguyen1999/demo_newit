import {API} from '../config'

export const getAllCandidate = ()=>{
    return fetch(`${API}/cans/getcans`,{
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