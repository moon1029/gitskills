import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//要是用vue3.0要引入此插件
import VueCompositionApi from '@vue/composition-api'
Vue

//阻止生产模式的消息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
