import Vue from 'vue'
import Vuex from 'vuex'
import content from './modules/content'
import userInfo from './modules/user_info'
import docState from './modules/doc_state'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    docState,
    content,
    userInfo
  },
  strict: debug,
  middlewares: debug ? [] : []
})
