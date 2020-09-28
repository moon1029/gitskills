import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavShow:true
  },
  mutations: {  //改变状态
  },
  actions: {  //管理、提交mutations
    HIDENAV({commit}){
      commit('')
    },
    SHOWNAV({commit}){

    }
  },
  modules: {  
  }
})
