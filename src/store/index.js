import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import {auth} from './modules/auth'
import {products} from './modules/products'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    products
  },
  plugins: [createPersistedState({
     paths: ['auth']
  })],
})
