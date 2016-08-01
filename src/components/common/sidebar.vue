<style lang="styl" src='../../assets/styl/common/sidebar.styl' scoped></style>
<template>
  <aside class="menu" v-show="menuState" transition="color" @click="setMenu(false)">
  </aside>
  <div v-show="menuState" transition="show" class="menu-wrap">
    <div class="header">
      <div class="h-item">
        <div class="user-img">
          <a v-if="avatarUrl === ''" @click="handleUrl('login')">
            <img :src="userImg" alt="头像">
          </a>
          <a v-else @click="handleUrl('userInfo')">
            <img :src="avatarUrl" alt="头像">
          </a>
        </div>
      </div>
      <div v-if="loginName === ''" class="h-item s">
        <div class="login-text">
          请点击头像登陆
        </div>
      </div>
      <div v-else class="h-item s">
        <div class="info">
          <h4>{{loginName}}</h4>
          <span>积分：{{score}}</span>
        </div>
        <div class="logout">
          <a @click="logout">注销</a>
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
  <dialog :config.sync="config"></dialog>
</template>

<script>
  import { setMenu, setTip } from '../../vuex/actions/doc_actions'
  import { setDetail, deleteUserInfo } from '../../vuex/actions/user_actions'
  import dialog from './dialog'
  export default {
    vuex: {
      getters: {
        routeName: ({ route }) => route.name,
        menuState: ({ docState }) => docState.menuState,
        avatarUrl: ({userInfo}) => userInfo.avatarUrl,
        loginName: ({ userInfo }) => userInfo.loginName,
        score: ({userInfo}) => userInfo.score
      },
      actions: {
        setMenu,
        setDetail,
        deleteUserInfo,
        setTip
      }
    },
    components: {
      dialog
    },
    data () {
      return {
        navState: 'nav-wrap',
        userImg: '/static/img/user_avtar_default.png',
        config: {}
      }
    },
    ready () {
      this.setNavState()
    },
    watch: {
      routeName: 'setNavState',
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
      logout () {
        this.config = {
          visible: true,
          text: '确定要注销吗？',
          sureText: '确定',
          cancelText: '取消',
          callback: () => {
            let a = this.deleteUserInfo()
            if (a) {
              this.setTip({
                text: '注销成功'
              })
            }
          }
        }
      }
    }
  }
</script>