<style lang='styl' src='../../../assets/styl/list.styl'></style>
<template>
  <div v-for='item in listData'>    
  </div>
</template>
<script>
  export default {
    props: {
      listData: String
    }
  }
</script>