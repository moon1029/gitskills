import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavShow:true
  },
  getters:{
    //计算
  },
  mutations: {  //改变状态
    //显示
    SHOWNAV(state){
      state.isNavShow = true
    },
    //隐藏
    HIDENAV(state){
      state.isNavShow = false
    },
  },
  actions: {  //管理、提交mutations
    HIDENAV({commit}){
      commit('HIDENAV')
    },
    SHOWNAV({commit}){
      commit('SHOWNAV')
    }
  },
  modules: {  
  }
})
