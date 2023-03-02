import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import {products} from './modules/products'
import {cart} from './modules/cart'
import {auth} from './modules/auth'

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
    products,
    cart
  },
  plugins: [createPersistedState({
     paths: ['auth']
  })],
})
