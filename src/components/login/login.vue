<style lang="styl" src='../../assets/styl/login.styl' scoped></style>
<template>
  <section class="content">
    <div class="banner">
      <img src="../../assets/img/cnodejs_light.svg" alt="">
    </div>
    <div class="login">
      <div class="i-wrap">
        <input type="text" name="access" placeholder="Access Token">
      </div>
      <div class="b-wrap">
        <!-- TODO 扫描二维码 -->
        <a>登陆</a>
      </div>
      <div class="tip">
        <a @click="tip">如何获取Access_Token?</a>
      </div>
    </div>
  </section>
  <dialog :config.sync="config"></dialog>
</template>
<script>
  import dialog from '../common/dialog'
  export default {
    data () {
      return {
        config: {
          visible: false,
          text: '在 Cnode社区网站端登陆你的账户，然后在右上角找到【设置】按钮，点击进入后将页面滑动到最底部来查看你的Access Token。',
          sureText: '确定'
        }
      }
    },
    methods: {
      tip () {
        this.config.visible = true
      }
    },
    components: {
      dialog
    }
  }
</script>