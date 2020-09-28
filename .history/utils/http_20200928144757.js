import axios from 'axios'

const instance = axios.create({
    //baseURL会在发送接口请求时拼接在url前面
    baseURL:"请求的地址",
})

//  请求拦截
//      

export function get(url,params){
    return instance.get(url,{
        params
    })
}

export function post(url,data){
    return instance.post(url,data)
}
