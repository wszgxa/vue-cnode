<style lang="styl" scoped>
  @import '../../assets/styl/partial/variables'
  .msg
    margin-top mg-top
</style>
<template>
  <section class="msg">
    <list :list-data="list"></list>
  </section>
</template>
<script>
  import list from './child/list'
  import { setTip } from '../../vuex/actions/doc_actions'
  export default {
    vuex: {
      getters: {
        accessToken: ({ userInfo }) => userInfo.accessToken
      },
      actions: {
        setTip
      }
    },
    data () {
      return {
        list: []
      }
    },
    ready () {
      this.getList()
    },
    components: {
      list
    },
    methods: {
      getList () {
        this.$http({
          url: '/api/v1/messages',
          method: 'GET',
          params: {
            accesstoken: this.accessToken
          }
        }).then(res => {
          let data = JSON.parse(res.data)
          let listData = data.data
          if (!data.success) {
            this.setTip({
              text: '请求出错'
            })
          } else {
            this.$set('list', listData.hasnot_read_messages.concat(listData.has_read_messages))
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>