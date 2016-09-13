<style lang="styl" src="../../../assets/styl/comment.styl" scoped></style>
<template>
  <div class="comment-wrap">
  </div>
</template>

<script>
  export default {
    vuex: {
      getterts: {
        accessToken: ({ userInfo }) => userInfo.accessToken
      }
    },
    props: {
      replyId: {
        default: '',
        type: String
      }
    },
    data () {
      return {
        text: ''
      }
    }
  }
</script>