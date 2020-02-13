import Vue from 'vue'
import Vuex from 'vuex'
import currentUser from './modules/currentUser'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    // is updated states
  },
  actions: {
    // request api to commit mutations
  },
  modules: {
    currentUser,
  }
})
