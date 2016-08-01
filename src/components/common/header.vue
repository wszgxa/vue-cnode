<style lang='styl' src='../../assets/styl/common/header.styl' scoped></style>

<template>
  <header 
    v-if="headerState"
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
        routeName: ({route}) => route.name
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
    watch: {
      routeName: 'setState'
    },
    ready () {
      this.setState()
    },
    methods: {
      setState () {
        let stateEnum = {
          login: true,
          user: true
        }
        if (stateEnum[this.routeName]) {
          this.headerState = true
        } else {
          this.headerState = false
        }
      },
      goBack () {
        window.history.go(-1)
      },
      openMenu () {
        this.setMenu(true)
      }
    }
  }
</script>