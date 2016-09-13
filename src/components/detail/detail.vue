<style lang='styl' src='../../assets/styl/detail.styl'></style>
<template>
  <section class="detail-content">
    <div v-if="author.loginname" class="content">
      <h3 class="title">{{ data.title }}</h3>
      <div v-if="author.loginname" class="info-wrap">
        <div
          @click="jumpUser(author.loginname)"
          class="user_avatar">
          <img :src="author.avatar_url" alt="user_icon">
        </div>
        <div class="item-detail">
          <div class="z">
            <span>
              <a v-if="tag.state" class="ac" >{{ tag.msg }}</a>
              <a v-else>{{ tag.msg }}</a>
              {{ author.loginname }}</span>
            <span>创建于<timeago :since="data.create_at"></timeago> ● {{ data.visit_count }}次浏览</span>
          </div>
          <div class="g" @click="toggleCollect">
            <i v-if='data.is_collect' class="icon i-star"></i>
            <i v-else class="icon i-starline"></i>
          </div>
        </div>
      </div>
        <text :text="data.content"></text>
    </div>
    <list :ac="ac" :list.sync="data.replies"></list>
    <comment></comment>
  </section>
</template>
<script>
  import list from './child/replies_list'
  import text from '../common/text'
  import comment from './child/comment'
  import { setTip } from '../../vuex/actions/doc_actions'
  
  export default {
    vuex: {
      getters: {
        userId: ({ userInfo }) => userInfo.id,
        accessToken: ({ userInfo }) => userInfo.accessToken
      },
      actions: {
        setTip
      }
    },
    components: {
      text,
      list,
      comment
    },
    data () {
      return {
        data: {},
        author: {},
        ac: [],
        collectLock: false,
        tag: {
          state: true,
          msg: '置顶'
        }
      }
    },
    watch: {
      data: 'setTag'
    },
    ready () {
      this.$http({
        url: `/api/v1/topic/${this.$route.query.id}`,
        method: 'GET',
        params: {
          accesstoken: this.accessToken
        }
      }).then(function (res) {
        let data = JSON.parse(res.data)
        if (data.success) {
          this.data = data.data
          this.setAc(data.data.replies)
          this.author = data.data.author
        } else {
          // todo 错误处理
          window.alert('接口调用出错')
        }
      }, function (err) {
        console.log(err)
      })
    },
    methods: {
      setAc (data) {
        let self = this
        data.forEach(function (item, index) {
          if (item.ups.indexOf(self.userId) !== -1) {
            self.ac.push(true)
          } else {
            self.ac.push(false)
          }
        })
      },
      toggleCollect () {
        if (this.accessToken === '') {
          this.setTip({
            text: '请先登录'
          })
        }
        if (this.data.is_collect) {
          this.collect('de_collect')
        } else {
          this.collect('collect')
        }
      },
      collect (tag) {
        let collectEnum = {
          de_collect: false,
          collect: true
        }
        let tagBoolean = collectEnum[tag]
        if (this.collectLock) {
          this.setTip({
            text: '数据传输中，请等待一会儿'
          })
          return
        }
        this.collectLock = true
        this.$set('data.is_collect', tagBoolean)
        this.$http({
          url: `/api/v1/topic_collect/${tag}`,
          method: 'POST',
          body: JSON.stringify({
            accesstoken: this.accessToken,
            topic_id: this.data.id
          }),
          headers: {
            contentType: 'application/x-www-form-urlencoded'
          },
          tip: false
        }).then(res => {
          let data = JSON.parse(res.data)
          if (!data.success) {
            this.setTip({
              text: '取消失败'
            })
            this.$set('data.is_collect', !tagBoolean)
          }
          this.collectLock = false
        }).catch((err) => {
          console.log(err)
          this.collectLock = false
          this.$set('data.is_collect', !tagBoolean)
        })
      },
      jumpUser (userName) {
        this.$route.router.go({
          name: 'user',
          params: {
            username: userName
          }
        })
      },
      setTag () {
        let tagEnum = {
          good: {
            state: true,
            msg: '精华'
          },
          top: {
            state: true,
            msg: '置顶'
          },
          ask: {
            state: false,
            msg: '问答'
          },
          share: {
            state: false,
            msg: '分享'
          },
          job: {
            state: false,
            msg: '招聘'
          }
        }
        if (this.data.good) {
          this.tag = tagEnum.good
          return
        }
        if (this.data.top) {
          this.tag = tagEnum.top
          return
        }
        this.tag = tagEnum[this.data.tab]
      }
    }
  }
</script>