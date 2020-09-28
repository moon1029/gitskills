import axios from 'axios'

const instance = axios.ce

export function get(url,params){
    return axios.get(url,{
        params
    })
}

export function post(url,data){
    return axios.post(url,data)
}
