import Vue from 'vue'
import Vuex from 'vuex'
import films from './modules/films.js'
import filters from './modules/filters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    films,
    filters
  },
  getters:{

  },
})
