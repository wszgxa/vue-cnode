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
          <a v-else @click="user">
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
        <a id='index' @click="handleUrl('')">
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
      <div :class="navState">
        <a id='msg' @click="handleUrl('msg')">
          <i class="icon i-msg"></i>
          <span>消息 <b class="un-read" v-if="unRead !=0 ">{{unRead}}</b></span>
        </a>
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
        accessToken: ({ userInfo }) => userInfo.accessToken,
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
        config: {},
        unRead: 0
      }
    },
    ready () {
      this.setNavState()
      this.$nextTick(() => {
        if (this.accessToken) {
          this.getUnReadMsg()
        }
      })
    },
    watch: {
      routeName: 'setNavState'
    },
    methods: {
      getUnReadMsg () {
        this.$http({
          url: '/api/v1/message/count',
          method: 'GET',
          params: {
            accesstoken: this.accessToken
          }
        }).then((res) => {
          let data = JSON.parse(res.data)
          this.unRead = data.data
        }).catch((err) => {
          console.log(err)
        })
      },
      handleUrl (name) {
        if (name === 'msg') {
          this.$route.router.go({
            name: name
          })
          this.setMenu(false)
          return
        }
        this.$route.router.go({
          path: `/${name}`
        })
        this.setMenu(false)
      },
      setNavState () {
        this.navState = 'nav-wrap ' + this.routeName
      },
      user () {
        this.$route.router.go({
          name: 'user',
          params: {
            username: this.loginName
          }
        })
        this.setMenu(false)
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
              this.setMenu(false)
            }
          }
        }
      }
    }
  }
</script>