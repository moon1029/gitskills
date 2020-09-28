import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ax

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
