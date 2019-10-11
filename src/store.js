import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      son:"",
      son1:""
  },
  mutations: {
    changeSon(state,val){
      state.son1 = val
    }
  },
  actions: {

  }
})
