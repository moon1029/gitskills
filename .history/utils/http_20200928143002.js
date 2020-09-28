import axios from 'axios'

const instance = axios.create({
    baseURL:"请求的"
})

export function get(url,params){
    return axios.get(url,{
        params
    })
}

export function post(url,data){
    return axios.post(url,data)
}
