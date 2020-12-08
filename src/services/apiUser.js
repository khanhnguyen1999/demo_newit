
import {API} from '../config'

export const getUserNameById = (id)=>{
    return fetch(`${API}/users/getusername/${id}`,{
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