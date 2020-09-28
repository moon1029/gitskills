import axios from 'axios'

const instance = axios.create({
    //baseURL会在发送接口请求时拼接在url前面
    baseURL: "请求的地址",
})

//  请求拦截
//      所有的网络请求都会先走这个方法
//      可以里面为请求添加一些自定义的内容
instance.interceptors.request.use(
    config => {
        //可以携带token，Authorization这个名字根据服务器端的要求来，一般是这个
        config.headers.Authorization = "11111";
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)

//  响应拦截
//      在服务器返回数据之后都会先执行方法
instance.interceptors.response.use(
    response => {
        //接口请求成功，返回响应数据
        if(response.status==200){
            return Promise.resolve(response);
        }else{
            return Promise.reject(response);
        }
        // return response;
    },
    err => {
        //接口请求异常或失败，
        if(error.response.status){
            //根据返回的状态码定义提示信息,if/switch都可以，可以与后端人员
            switch(error.response.status){
                
            }
        }
        return Promise.reject(err);
    }
)

export function get(url, params) {
    return instance.get(url, {
        params
    })
}

export function post(url, data) {
    return instance.post(url, data)
}
