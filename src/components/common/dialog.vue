<style lang="styl" src='../../assets/styl/common/dialog.styl' scoped></style>
<template>
  <div v-if="config.visible" class="dialog-mask"></div>
  <div v-if="config.visible" class="dialog">
    <div class="text">
      {{ config.text }}
    </div>
    <div class="btn-wrap">
      <a @click="sure" >{{config.sureText}}</a>
      <a @click="close" v-if="config.cancelText != undefined ">取消</a>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      config: {
        type: Object,
        default: {
          visible: false,
          text: '',
          sureText: '确定',
          cancelText: '',
          callback: null
        }
      }
    },
    methods: {
      sure () {
        if (this.config.callback) this.config.callback()
        this.close()
      },
      close () {
        this.config.visible = false
      }
    }
  }
</script>