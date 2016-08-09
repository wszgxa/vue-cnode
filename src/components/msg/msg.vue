<style lang="styl" src="../../assets/styl/msg.styl" scoped></style>
<template>
  <section class="msg">
    <div 
      class="item"
      v-for="item in list" 
      v-link="{name:'detail', query: {id: item.topic.id}}">
      <header>
        <div class="img-wrap">
          <img :src="item.author.avatar_url" alt="avatar">
        </div>
        <div class="info">
          <div class="info-item">
            <span>{{ item.author.loginname }}</span>
            <span class="s"><timeago :since="item.create_at"></timeago></span>
          </div>
          <div class="info-item">
            <span class="s" v-if="item.type == 'reply'">回复了您的话题</span>
            <span class="s" v-if="item.type == 'at'">在回复中@了您</span>
            <span v-if="!item.has_read"><i class="circle"></i></span>
            <span v-else> </span>
          </div>
        </div>
      </header>
    </div>
  </section>
</template>
<script>
  import { setTip } from '../../vuex/actions/doc_actions'
  import { setMsgs } from '../../vuex/actions/user_actions'
  export default {
    vuex: {
      getters: {
        list: ({ userInfo }) => userInfo.msgs
      },
      actions: {
        setTip,
        setMsgs
      }
    },
    ready () {
      this.getList()
    },
    methods: {
      getList () {
        this.setMsgs((res) => {
          if (!res.success) {
            this.setTip({
              text: res.msg
            })
          }
        })
      }
    }
  }
</script>