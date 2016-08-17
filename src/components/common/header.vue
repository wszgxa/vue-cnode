<style lang='styl' src='../../assets/styl/common/header.styl' scoped></style>

<template>
  <header 
    v-if="headerState"
    class="header s"
    >
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
      <a @click='edit' class="icon i-pub"></a>
    </div>
    <page></page>
  </header>
</template>
<script>
  import { setMenu } from '../../vuex/actions/doc_actions'
  import page from './page'
  export default {
    vuex: {
      getters: {
        routeName: ({route}) => route.name
      },
      actions: {
        setMenu
      }
    },
    components: {
      page
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
          user: true,
          msg: true,
          detail: true,
          edit: true
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
      },
      edit () {
        this.$route.router.go({
          name: 'edit'
        })
      }
    }
  }
</script>