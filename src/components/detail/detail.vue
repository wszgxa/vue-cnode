<style lang='styl' src='../../assets/styl/detail.styl' scoped></style>
<template>
  <section class="detail">
    <div class="content">
      <h3 class="title">{{ data.title }}</h3>
      <div class="info-wrap">
        <div class="user_avatar">
          <img :src="author.avatar_url" alt="user_icon">
        </div>
        <div class="item-detail">
          <div class="z">
            <span>
              <i v-if="tag.state" class="ac" >{{ tag.msg }}</i>
              <i v-else>{{ tag.msg }}</i>
              {{ author.loginname }}</span>
            <span>创建于<timeago :since="data.create_at"></timeago> ● {{ data.visit_count }}次浏览</span>
          </div>
          <div class="g">
            <i class="icon i-starline"></i>
          </div>
        </div>
      </div>
        <text :text="data.content"></text>
    </div>
    <div v-for="(index, item) in data.replies" class="comments">
      <div class="info-wrap s">
        <div class="user_avatar">
          <img :src="item.author.avatar_url" alt="user_icon">
        </div>
        <div class="item-detail">
          <div class="z">
            <span>{{ item.author.loginname }}</span>
            <span>{{ index }}楼 ● <timeago :since="item.create_at"></timeago></span>
          </div>
          <div class="g">
            <i class="icon i-praise ii"></i>
            {{item.ups.length}}
            <i class="icon i-reply ii"></i>
          </div>
        </div>
      </div>
      <text :text="item.content"></text>
    </div>
  </section>
</template>
<script>
  import text from '../common/text'
  export default {
    components: {
      text
    },
    data () {
      return {
        data: {},
        author: {},
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
        method: 'GET'
      }).then(function (res) {
        let data = JSON.parse(res.data)
        if (data.success) {
          this.data = data.data
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