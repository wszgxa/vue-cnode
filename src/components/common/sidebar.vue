<style lang="styl" src='../../assets/styl/common/sidebar.styl' scoped></style>
<template>
  <aside class="menu" v-show="menuState" transition="color" @click="setMenu(false)">
  </aside>
  <div v-show="menuState" transition="show" class="menu-wrap">
    <div class="header">
      <div class="h-item">
        <div class="user-img">
          <a @click="handleUrl('login')">
            <img :src="userImg" alt="头像">
          </a>
        </div>
      </div>
      <div class="h-item s">
        <div class="login-text">
          请点击头像登陆
        </div>
      </div>
    </div>
    <nav>
      <div :class="navState">
        <a id='index' @click="handleUrl('index')">
          <i class="icon i-all"></i>
          <span>全部</span>
        </a>
        <a id="good" @click="handleUrl('good')">
          <i class="icon i-good"></i>
          <span>精华</span>
        </a>
        <a id="share" @click="handleUrl('share')">
          <i class="icon i-share"></i>
          <span>分享</span>
        </a>
        <a id="ask" @click="handleUrl('ask')">
          <i class="icon i-ask"></i>
          <span>问答</span>
        </a>
        <a id="job" @click="handleUrl('job')">
          <i class="icon i-job"></i>
          <span>招聘</span>
        </a>
      </div>
      <div class="nav-wrap">
        <a id="about">
          <i class="icon i-about"></i>
          <span>关于</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
  import { setMenu } from '../../vuex/actions/doc_actions'
  import { setDetail } from '../../vuex/actions/user_actions'
  export default {
    vuex: {
      getters: {
        name: ({ route }) => route.name,
        menuState: ({ docState }) => docState.menuState,
        loginName: ({ userInfo }) => userInfo.loginName
      },
      actions: {
        setMenu,
        setDetail
      }
    },
    data () {
      return {
        navState: 'nav-wrap',
        userImg: '/static/img/user_avtar_default.png'
      }
    },
    ready () {
      this.setNavState()
    },
    watch: {
      name: 'setNavState',
      accessToken: 'getUserInfo'
    },
    methods: {
      handleUrl (name) {
        this.$route.router.go({
          name: name
        })
        this.setMenu(false)
      },
      setNavState () {
        this.navState = 'nav-wrap ' + this.name
      },
      getUserInfo () {

      }
    }
  }
</script>