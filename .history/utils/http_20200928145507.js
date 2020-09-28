import axios from 'axios'

const instance = axios.create({
    //baseURL会在发送接口请求时拼接在url前面
    baseURL:"请求的地址",
})

//  请求拦截
//      所有的网络请求都会先走这个方法
instance.interceptors.request.use(
    function(config){
        return config;
    },
    function(err){
        return Promise.reject(err);
    }
)

//  响应拦截
//      
instance.interceptors.request.use(
    function(response){
        return response;
    },
    function(err){
        return Promise.reject(err);
    }
)

export function get(url,params){
    return instance.get(url,{
        params
    })
}

export function post(url,data){
    return instance.post(url,data)
}
