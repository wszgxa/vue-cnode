<style lang="styl" src='../../assets/styl/login.styl' scoped></style>
<template>
  <section class="content">
    <div class="banner">
      <img src="../../assets/img/cnodejs_light.svg" alt="">
    </div>
    <div class="login">
      <div class="i-wrap">
        <input type="text" v-model="access" name="access" placeholder="Access Token">
      </div>
      <div class="b-wrap">
        <!-- TODO 扫描二维码 -->
        <a @click="login">登陆</a>
      </div>
      <div class="tip">
        <a @click="dialog">如何获取Access_Token?</a>
      </div>
    </div>
  </section>
  <dialog :config.sync="config"></dialog>
</template>
<script>
  import dialog from '../common/dialog'
  import { setBaseInfo, setDetail } from '../../vuex/actions/user_actions'
  import { setMenu, setTip } from '../../vuex/actions/doc_actions'
  export default {
    vuex: {
      actions: {
        setBaseInfo,
        setMenu,
        setTip,
        setDetail
      }
    },
    data () {
      return {
        config: {
          visible: false,
          text: '在 Cnode社区网站端登陆你的账户，然后在右上角找到【设置】按钮，点击进入后将页面滑动到最底部来查看你的Access Token。',
          sureText: '确定'
        },
        access: ''
      }
    },
    methods: {
      dialog () {
        this.config.visible = true
      },
      success () {
        window.history.go(-1)
        this.setMenu(true)
        this.setDetail()
      },
      login () {
        if (this.access.length < 6) {
          this.setTip({
            text: '请输入正确的Access Token'
          })
          return
        }
        this.setBaseInfo(this.access, (res) => {
          if (res.success) {
            this.success()
          }
          this.setTip({
            text: res.msg
          })
        })
      }
    },
    components: {
      dialog
    }
  }
</script>