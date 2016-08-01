<style lang="styl" src='../../assets/styl/user_info.styl' scoped></style>
<template>
  <section class="user-wrap">
    <div class="header">
      <div class="avatar">
        <img :src="userData.avatar_url" alt="头像">
        <span>{{ userData.loginname }}</span>
      </div>
      <div class="info">
        <div>
          注册时间：{{ userData.create_at | fullDate }}
        </div>
        <div class="score">
          积分：{{ userData.score }}
        </div>
      </div>
    </div>
    <div class="content">
      <div class="nav">
        <a @click="handeSwiper">最近回复</a>
        <a @click="handeSwiper">最新发布</a>
        <a @click="handeSwiper" class='ac'>话题收藏</a>
      </div>
    </div>
  </section>
</template>
<script>
  import { setTip } from '../../vuex/actions/doc_actions'
  export default {
    vuex: {
      actions: {
        setTip
      }
    },
    data () {
      return {
        userData: {},
        collectData: {}
      }
    },
    ready () {
      this.$http({
        url: `/api/v1/topic_collect/${this.$route.params.username}`,
        method: 'GET'
      }).then((res) => {
        let data = JSON.parse(res.data)
        if (data.success) {
          this.collectData = data.data
        } else {
          this.setTip({
            text: '数据获取出错'
          })
        }
      }).catch((err) => {
        this.setTip({
          text: '接口出错'
        })
        console.log(err)
      })
      this.$http({
        url: `/api/v1/user/${this.$route.params.username}`,
        methdo: 'GET'
      }).then((res) => {
        let data = JSON.parse(res.data)
        if (data.success) {
          this.userData = data.data
        } else {
          this.setTip({
            text: '数据获取出错'
          })
        }
      }).catch((err) => {
        this.setTip({
          text: '接口出错'
        })
        console.log(err)
      })
    }
  }
</script>