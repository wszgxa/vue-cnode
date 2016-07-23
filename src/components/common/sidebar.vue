<style lang="styl" src='../../assets/styl/sidebar.styl' scoped></style>
<template>
  <aside class="menu" v-show="menuState" transition="color" @click="closeMenu($event)">
  </aside>
  <div v-show="menuState" transition="show" class="menu-wrap">
    <div>
      
    </div>
    <nav>
      
    </nav>
  </div>
</template>

<script>
  export default {
    props: {
      menuState: Boolean
    },
    methods: {
      closeMenu (e) {
        this.menuState = false
      }
    }
  }
</script>