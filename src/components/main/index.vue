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
        data: ({ content }) => content.data
      },
      actions: {
        setContent
      }
    },
    computed: {
      listData: function () {
        return this.data[this.$route.name]
      }
    },
    data () {
      return {
        tip: {}
      }
    },
    ready () {
      // 用箭头函数绑定this
      this.setContent(this.$route.name, (err) => {
        this.tip = {
          text: err
        }
      })
    },
    components: {
      list,
      tip
    }
  }
</script>