<style lang='styl' src='../../../assets/styl/list.styl' scoped></style>
<template>
  <div v-for='item in listData' class="item">
    <a v-link="{name: 'detail', query:{ id: item.id }}">
      <h3>{{ item.title }}</h3>
      <div class="info-wrap">
        <div class="user_avatar">
          <img :src="item.author.avatar_url" alt="user_icon">
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
  </div>
</template>
<script>
  export default {
    props: {
      listData: Array
    }
  }
</script>