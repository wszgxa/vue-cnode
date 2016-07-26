import Vue from 'vue'
import Vuex from 'vuex'
import content from './modules/content'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    content
  },
  strict: debug,
  middlewares: debug ? [] : []
})
