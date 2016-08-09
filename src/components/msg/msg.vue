<style lang="styl" scoped>
  @import '../../assets/styl/partial/variables'
  .msg
    margin-top mg-top
</style>
<template>
  <section class="msg">
  </section>
</template>
<script>
  import { setTip } from '../../vuex/actions/doc_actions'
  import { setMsgs } from '../../vuex/actions/user_actions'
  export default {
    vuex: {
      getters: {
        list: ({ userInfo }) => userInfo.msg
      },
      actions: {
        setTip,
        setMsgs
      }
    },
    ready () {
      this.getList()
    },
    methods: {
      getList () {
        this.setMsgs((res) => {
          if (!res.success) {
            this.setTip({
              text: res.msg
            })
          }
        })
      }
    }
  }
</script>