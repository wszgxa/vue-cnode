import Vue from 'vue'
import Vuex from 'vuex'
import content from './modules/content'
import userInfo from './modules/user_info'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    content,
    userInfo
  },
  strict: debug,
  middlewares: debug ? [] : []
})
