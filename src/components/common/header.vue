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
  export default {
    vuex: {
      getters: {
        name: ({route}) => route.name
      }
    },
    props: {
      menuState: Boolean
    },
    methods: {
      goBack () {
        this.$route.router.go({name: 'index'})
      },
      openMenu () {
        this.menuState = true
      }
    }
  }
</script>