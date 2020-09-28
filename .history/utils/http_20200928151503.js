import axios from 'axios'

const instance = axios.create({
    //baseURL会在发送接口请求时拼接在url前面
    baseURL:"请求的地址",
})

//  请求拦截
//      所有的网络请求都会先走这个方法
//      可以里面为请求添加一些自定义的内容
instance.interceptors.request.use(
    function(config){
        //可以携带token，Authorization这个名字根据服务器端的要求来
        config.headers.Authorization ="11111";
        return config;
    },
    function(err){
        return Promise.reject(err);
    }
)

//  响应拦截
//      在服务器返回数据之后都会先执行方法
instance.interceptors.response.use(
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
