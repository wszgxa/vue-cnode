<style lang="styl" src='../../assets/styl/common/sidebar.styl' scoped></style>
<template>
  <aside class="menu" v-show="menuState" transition="color" @click="closeMenu($event)">
  </aside>
  <div v-show="menuState" transition="show" class="menu-wrap">
    <div class="header">
      <div class="h-item">
        <div class="user-img">
          <img :src="userImg" alt="头像">
        </div>
      </div>
      <div class="h-item">
        <div class="login-text">
          请点击头像登陆
        </div>
      </div>
    </div>
    <nav>
      <div :class="navState">
        <a id='index' @click="handleUrl($event)">
          <i class="icon i-all"></i>
          <span>全部</span>
        </a>
        <a id="good" @click='handleUrl($event)'>
          <i class="icon i-good"></i>
          <span>精华</span>
        </a>
        <a id="share" @click='handleUrl($event)'>
          <i class="icon i-share"></i>
          <span>分享</span>
        </a>
        <a id="ask" @click='handleUrl($event)'>
          <i class="icon i-ask"></i>
          <span>问答</span>
        </a>
        <a id="job" @click='handleUrl($event)'>
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
  export default {
    vuex: {
      getters: {
        name: ({ route }) => route.name
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
      name: 'setNavState'
    },
    props: {
      menuState: Boolean
    },
    methods: {
      handleUrl (e) {
        let name = e.target.id
        this.$route.router.go({
          name: name
        })
        this.closeMenu()
      },
      setNavState () {
        this.navState = 'nav-wrap ' + this.name
      },
      closeMenu (e) {
        this.menuState = false
      }
    }
  }
</script>