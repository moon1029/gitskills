import axios from 'axios'

const instance = axios.create({
    //baseURL会在发送接口请求时拼接在url前面
    baseURL={} "http://localhost:8080",
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
        if (response.status == 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
        // return response;
    },
    err => {
        //接口请求异常或失败，
        if (error.response.status) {
            //根据返回的状态码定义提示信息,if/switch都可以，可以与后端人员
            switch (error.response.status) {
                case 401:
                    // 401: 未登录
                    // 未登录则跳转登录页面，并携带当前页面的路径
                    // 在登录成功后返回当前页面，这一步需要在登录页操作。
                    router.relace({
                        path: '/login',
                        query: {
                            //携带当前页面的路径
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                    case 404:
                    // 401: 未登录
                    // 未登录则跳转登录页面，并携带当前页面的路径
                    // 在登录成功后返回当前页面，这一步需要在登录页操作。
                    alert("接口有问题！！！")
                    break;
                default:
                    alert(error.response.data.message)  //自选提示组件
            }
        }
        console.log(1212423545645);
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
