<style lang='styl' src='../../../assets/styl/list.styl' scoped></style>
<template>
  <a 
    v-for='item in listData'
    class="item"
    @click="jumpDetail($event, item.id)">
    <h3>{{ item.title }}</h3>
    <div class="info-wrap">
      <div @click="jumpUser($event, item.author.loginname)" class="user_avatar">
        <img v-lazy="item.author.avatar_url" alt="user_icon">
      </div>
      <div class="item-detail">
        <div class="i">
          <span>{{ item.author.loginname }}</span>
          <span>创建于{{ item.create_at | fullDate}}</span>
        </div>
        <div class="g">
          <span>{{ item.reply_count }}/{{ item.visit_count }}</span>
          <span><timeago :since="item.last_reply_at"></timeago></span>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
  export default {
    props: {
      listData: Array
    },
    methods: {
      jumpDetail (e, id) {
        this.$route.router.go({
          name: 'detail',
          query: {
            id: id
          }
        })
      },
      jumpUser (e, userName) {
        e.stopPropagation()
        this.$route.router.go({
          name: 'user',
          params: {
            username: userName
          }
        })
      }
    }
  }
</script>