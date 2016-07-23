import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { configRouter } from './config_router'
import resourceGlobalSet from './resource_set'

Vue.use(VueResource)
Vue.use(VueRouter)
const router = new VueRouter({
  history: false,
  saveScrollPosition: true
})
configRouter(router)
Vue.http.options.emulateJSON = true
Vue.http.interceptors.push(resourceGlobalSet) // ajax 拦截

router.start(App, 'app')
