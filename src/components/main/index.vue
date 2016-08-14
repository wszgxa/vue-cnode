<style lang="styl" scoped>
  .list-wrap
    width 10rem
    margin-top (100/75)rem
</style>
<template>
  <section class="list-wrap">
    <!--<page></page>-->
    <list :list-data='listData'></list>
  </section>
</template>
<script>
  import list from './child/list'
  import { setContent } from '../../vuex/actions/content_actions'
  import { setTip } from '../../vuex/actions/doc_actions'
  import { page } from './child/page'
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
    data () {
      return {
        listData: []
      }
    },
    ready () {
      // 用箭头函数绑定this
      this.setContent(this.$route.name, 0, (res) => {
        if (!res.success) {
          this.setTip({
            text: res.msg
          })
        } else {
          this.setListData()
        }
      })
    },
    methods: {
      setListData () {
        this.listData = this.data[this.$route.name][0]
      }
    },
    components: {
      list,
      page
    }
  }
</script>