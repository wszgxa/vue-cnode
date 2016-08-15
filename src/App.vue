<!-- 全局样式 -->
<style lang="styl" src='./assets/styl/main.styl'></style>
<style lang="styl">
</style>
<template>
  <div id="app">
    <cn-header></cn-header>
    <sidebar></sidebar>
    <router-view></router-view>
    <tip></tip>
    <loading></loading>
  </div>
</template>

<script>
  import cnHeader from './components/common/header'
  import sidebar from './components/common/sidebar'
  import tip from './components/common/tip'
  import store from './vuex/store'
  import loading from './components/common/loading'
  import { setDetail, getStore } from './vuex/actions/user_actions'
  import fastclick from 'fastclick'
  export default {
    vuex: {
      actions: {
        setDetail,
        getStore
      }
    },
    store,
    components: {
      cnHeader,
      sidebar,
      tip,
      loading
    },
    ready () {
      // 设置基本信息到userInfo
      fastclick.attach(document.body)
      this.getStore()
    }
  }
</script>