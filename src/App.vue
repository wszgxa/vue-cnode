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
  </div>
</template>

<script>
  import cnHeader from './components/common/header'
  import sidebar from './components/common/sidebar'
  import tip from './components/common/tip'
  import store from './vuex/store'
  export default {
    store,
    components: {
      cnHeader,
      sidebar,
      tip
    }
  }
</script>