<style lang='styl' scoped>
  list-wrap
    width 10rem
</style>
<template>
  <section class="list-wrap">
    <list :list-data='listData'></list>
  </section> 
</template>
<script>
  import list from './child/list'
  export default {
    data () {
      return {
        listData: []
      }
    },
    ready () {
      this.$http({
        url: '/api/v1/topics',
        method: 'GET',
        params: {
          page: 0,
          limit: 20
        }
      }).then(function (res) {
        let data = JSON.parse(res.data)
        if (!data.success) {
          alert('失败')
        } else {
          listData = data.data
        }
        console.log(data.data.length)
      }, function (err) {
        console.log(err)
      })
    },
    components: {
      list
    }
  }
</script>