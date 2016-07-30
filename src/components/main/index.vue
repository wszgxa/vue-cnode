<style lang="styl" scoped>
  .list-wrap
    width 10rem
    margin-top (100/75)rem
</style>
<template>
  <section class="list-wrap">
    <list :list-data='listData'></list>
  </section> 
</template>
<script>
  import list from './child/list'
  import { setContent } from '../../vuex/actions/content_actions'
  import { setTip } from '../../vuex/actions/doc_actions'
  export default {
    vuex: {
      getters: {
        data: ({ content }) => content.data
      },
      actions: {
        setContent,
        setTip
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
      this.setContent(this.$route.name, (res) => {
        if (!res.success) {
          this.setTip({
            text: res.msg
          })
        }
      })
    },
    components: {
      list
    }
  }
</script>