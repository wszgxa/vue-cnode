import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import filter from './filter'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import { configRouter } from './config_router'
import resourceGlobalSet from './resource_set'
import vueTimeAgo from 'vue-timeago'
import lazyload from 'vue-lazyload'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(filter)
Vue.use(lazyload, {
  error: '/static/img/avatar.gif',
  loading: '/static/img/avatar.gif'
})
Vue.use(vueTimeAgo, {
  name: 'timeago',
  locale: 'zh-CN',
  locales: {
    'zh-CN': require('vue-timeago/locales/zh-CN.json')
  }
})
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})
configRouter(router)
Vue.http.options.emulateJSON = true
Vue.http.interceptors.push(resourceGlobalSet) // ajax 拦截

sync(store, router)
router.start(App, 'app')
