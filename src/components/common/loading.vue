<style lang='styl' src='../../assets/styl/common/loading.styl' scoped></style>
<template>
  <div v-if="state" transition="rotate" class="loading-wrap">
    <i class="icon i-loading"></i>
  </div>
</template>
<script>
  export default {
    vuex: {
      getters: {
        state: ({docState}) => docState.loading
      }
    }
  }
</script>