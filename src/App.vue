<!-- 全局样式 -->
<style lang="styl" src='./assets/styl/main.styl'></style>
<style lang="styl">
</style>
<template>
  <div id="app">
    <cn-header :menu-state.sync="menuState"></cn-header>
    <sidebar :menu-state.sync="menuState"></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
  import cnHeader from './components/common/header'
  import sidebar from './components/common/sidebar'
  import store from './vuex/store'
  export default {
    store,
    data () {
      return {
        menuState: false
      }
    },
    components: {
      cnHeader,
      sidebar
    }
  }
</script>