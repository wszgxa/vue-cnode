<style lang="styl" scoped>
  .list-wrap
    width 10rem
    margin-top (170/75)rem
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
        data: ({ content }) => content.data,
        page: ({ route }) => route.params.page
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
      this.getData()
    },
    watch: {
      'page': 'getData'
    },
    methods: {
      getData () {
        // 用箭头函数绑定this
        this.setContent(this.$route.name, this.page, (res) => {
          if (!res.success) {
            this.setTip({
              text: res.msg
            })
          } else {
            this.setListData()
          }
        })
      },
      setListData () {
        this.listData = this.data[this.$route.name][this.page]
      }
    },
    components: {
      list
    }
  }
</script>