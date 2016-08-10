<style lang="styl" src='../../assets/styl/user_info.styl' scoped></style>
<template>
  <section class="user-wrap">
    <div class="header">
      <div v-if="userData.avatar_url" class="avatar-wrap">
        <div class="avatar">
          <img v-lazy="userData.avatar_url" alt="头像">
        </div>
        <span>{{ userData.loginname }}</span>
      </div>
      <div v-else class="avatar-wrap">
        <div class="avatar">
          <img src="../../assets/img/avatar.gif" alt="头像">
        </div>
      </div>
      <div class="info">
        <div v-if="userData.create_at">
          注册时间：{{ userData.create_at | fullDate }}
        </div>
        <div v-else>
          注册时间：
        </div>
        <div class="score">
          积分：{{ userData.score }}
        </div>
      </div>
    </div>
    <div class="content">
      <div class="nav">
        <a 
          @click="handeSwiper(1)"
          :class="$refs.swiper.currentPage == 1?'ac':''">最近回复</a>
        <a
          @click="handeSwiper(2)"
          :class="$refs.swiper.currentPage == 2?'ac':''">最新发布</a>
        <a 
          @click="handeSwiper(3)"
          :class="$refs.swiper.currentPage == 3?'ac':''">话题收藏</a>
      </div>
      <div class="swiper">
        <swiper
          v-ref:swiper
          id="swiper_horizontal"
          direction="horizontal"
          @slide-change-end="onSlideChangeEnd">
          <!-- 最近回复 -->
          <div class="slide-1 item-wrap">
            <a 
              v-for="item in userData.recent_replies" 
              v-link="{name: 'detail', query:{ id: item.id }}"
              class="item">
              <div class="icon">
                <img :src="item.author.avatar_url" alt="">
              </div>
              <div class="info-wrap">
                <h3 class="title">{{ item.title }}</h3>
                <div class="text">
                  <span>{{item.author.loginname}}</span>
                  <span><timeago :since="item.last_reply_at"></timeago></span>
                </div>
              </div>
            </a>
          </div>
          <!-- 最新发布 -->
          <div class="slide-2 item-wrap">
            <a 
              v-for="item in userData.recent_topics" 
              v-link="{name: 'detail', query:{ id: item.id }}"
              class="item">
              <div class="icon">
                <img :src="item.author.avatar_url" alt="">
              </div>
              <div class="info-wrap">
                <h3 class="title">{{ item.title }}</h3>
                <div class="text">
                  <span>{{item.author.loginname}}</span>
                  <span><timeago :since="item.last_reply_at"></timeago></span>
                </div>
              </div>
            </a>
          </div>
          <!-- 话题收藏 -->
          <div class="slide-3 item-wrap">
            <a 
              v-for="item in collectData"
              v-link="{name: 'detail', query:{ id: item.id }}"
              class="item">
              <div class="icon">
                <img :src="item.author.avatar_url" alt="">
              </div>
              <div class="info-wrap">
                <h3 class="title">{{ item.title }}</h3>
                <div class="text">
                  <span>{{item.author.loginname}}</span>
                  <span><timeago :since="item.last_reply_at"></timeago></span>
                </div>
              </div>
            </a>
          </div>  
        </swiper>

      </div>
    </div>
  </section>
</template>
<script>
  import swiper from 'vue-swiper'
  import { setTip } from '../../vuex/actions/doc_actions'
  export default {
    vuex: {
      actions: {
        setTip
      }
    },
    components: {
      swiper
    },
    data () {
      return {
        userData: {},
        collectData: {}
      }
    },
    created () {
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
    },
    methods: {
      handeSwiper (tag) {
        // tag应该不会变就写死吧
        this.$refs.swiper.setPage(tag)
      },
      onSlideChangeEnd (cur) {
        console.log(cur)
      }
    }
  }
</script>