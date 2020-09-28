import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//阻止生产模式的
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
