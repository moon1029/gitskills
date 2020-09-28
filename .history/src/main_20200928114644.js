import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//要是用vue3.0的写法要引入此插件
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

//相当于在Vue的原型对象里添加了一个属性$http(此名可换)
axios.default.baseURL = "ip地址+端口号"
Vue.prototype.$http = axios;

//阻止生产模式的消息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// post请求传递三个参数
// 参数一：表示请求地址
// 参数二：传递的数据 在请求体中传递
//  axios默认发送的数据格式是json格式的
//    配置信息
//    header
//    默认情况下的请求头：content-type:'application/json'
// axios.get('http://api/vi/login',{
//   userName:admin,

// }
// })