<style lang='styl' src='../../assets/styl/header.styl' socped></style>

<template>
  <header class="header">
    <div class="header-wrap">
      <a @click='openMenu' class="icon i-menu"></a>
      <h3>{{ $route.title }}</h3>
    </div>
  </header>
</template>
<script>
  export default {
    props: {
      menuState: Boolean
    },
    methods: {
      openMenu () {
        this.menuState = true
      }
    }
  }
</script>