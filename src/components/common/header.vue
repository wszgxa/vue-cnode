<style lang='styl' src='../../assets/styl/common/header.styl' scoped></style>

<template>
  <header 
    v-if="name == 'login'"
    class="header s">
    <div class="header-wrap">
      <a @click='goBack' class="icon i-back"></a>
      <h3>{{ $route.title }}</h3>
    </div>
  </header>
  <header
    v-else
    class="header">
    <div class="header-wrap">
      <a @click='openMenu' class="icon i-menu"></a>
      <h3>{{ $route.title }}</h3>
    </div>
  </header>
</template>
<script>
  import { setMenu } from '../../vuex/actions/doc_actions'
  export default {
    vuex: {
      getters: {
        name: ({route}) => route.name
      },
      actions: {
        setMenu
      }
    },
    data () {
      return {
        headerState: false
      }
    },
    ready () {
      let stateEnum = {
        login: true
      }
      if (stateEnum[this.$route.name]) {
        this.headerState = true
      }
    },
    methods: {
      goBack () {
        window.history.go(-1)
      },
      openMenu () {
        this.setMenu(true)
      }
    }
  }
</script>