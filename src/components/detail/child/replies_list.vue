<template>
  <div v-for="(index, item) in list" class="comments">
    <div class="info-wrap s">
      <div @click="jumpUser(item.author.loginname)" class="user_avatar">
        <img v-lazy="item.author.avatar_url" alt="user_icon">
      </div>
      <div class="item-detail">
        <div class="z">
          <span>{{ item.author.loginname }}</span>
          <span>{{ index }}楼 ● <timeago :since="item.create_at"></timeago></span>
        </div>
        <div class="g">
          <i @click="ups(index, item.id)" :class="{'ac': ac[index]}" class="icon i-praise ii"></i>
          {{item.ups.length}}
          <i class="icon i-reply ii"></i>
        </div>
      </div>
    </div>
    <text :text="item.content"></text>
  </div>
</template>

<script>
  import text from '../../common/text'
  import { setTip } from '../../../vuex/actions/doc_actions'
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
      text
    },
    props: {
      list: Array,
      ac: Array
    },
    methods: {
      changeUps (action, index) {
        let data = this.list[index]
        let i = data.ups.indexOf(this.userId)
        if (action === 'down') {
          data.ups.splice(i, 1)
          this.list.$set(index, data)
          this.ac.$set(index, false)
          return
        }
        if (action === 'up') {
          data.ups.push(this.userId)
          this.ac.$set(index, true)
          this.list.$set(index, data)
        }
      },
      jumpUser (userName) {
        this.$route.router.go({
          name: 'user',
          params: {
            username: userName
          }
        })
      },
      ups (index, id) {
        this.$http({
          url: `/api/v1/reply/${id}/ups`,
          method: 'POST',
          body: JSON.stringify({
            accesstoken: this.accessToken
          }),
          headers: {
            contentType: 'application/x-www-form-urlencoded'
          },
          tip: false
        }).then(res => {
          let data = JSON.parse(res.data)
          if (data.success) {
            this.changeUps(data.action, index)
          } else {
            this.setTip({
              text: '点赞失败'
            })
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>