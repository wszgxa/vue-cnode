<style lang="styl" scoped>
  .list-wrap
    width 10rem
    margin-top (100/75)rem
</style>
<template>
  <section class="list-wrap">
    <list :list-data='listData'></list>
  </section> 
  <tip :tip="tip"></tip>
</template>
<script>
  import list from './child/list'
  import tip from '../common/tip'
  import { setContent } from '../../vuex/actions/content_actions'
  export default {
    vuex: {
      getters: {
        listData: ({ content }) => content.index
      },
      actions: {
        setContent
      }
    },
    data () {
      return {
        tip: {}
      }
    },
    ready () {
      let res = this.setContent('index')
      if (res) {
        this.tip = {
          text: res
        }
      }
      // this.$http({
      //   url: '/api/v1/topics',
      //   method: 'GET',
      //   params: {
      //     page: 0,
      //     limit: 20
      //   }
      // }).then(function (res) {
      //   let data = JSON.parse(res.data)
      //   if (!data.success) {
      //     this.tip = {
      //       text: '调用接口出错'
      //     }
      //   } else {
      //     this.listData = data.data
      //   }
      // }, function (err) {
      //   this.tip = {
      //     text: '调用接口出错'
      //   }
      //   console.log(err)
      // })
    },
    components: {
      list,
      tip
    }
  }
</script>