import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavShow: true,
    token:""
  },
  getters: {
    //计算属性，可以将需要做计算的值放这里
    showNav(state) {
      return state.isNavShow
    },
    
  },
  mutations: {  //改变状态
    //显示
    SHOWNAV(state) {
      state.isNavShow = true
    },
    //隐藏
    HIDENAV(state) {
      state.isNavShow = false
    },
    //
    setToken(state,token){
      state.token = token
      localStorage.token = token //同步储存token至localStorage
    }
  },
  actions: {  //管理、提交mutations
    HIDENAV({ commit }) {
      commit('HIDENAV')
    },
    SHOWNAV({ commit }) {
      commit('SHOWNAV')
    }
  },
  modules: {
  }
})
