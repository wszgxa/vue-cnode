<style lang='styl' src='../../assets/styl/edit.styl' scoped></style>
<template>
  <section class="edit">
    <div class="item">
      <div>
        <span>选择分类：</span>
        <select name="tab" v-model="tab" class="select">
          <option value="share" selected>分享</option>
          <option value="ask">问答</option>
          <option value="job">招聘</option>     
        </select>
        <i class="icon i-down"></i>
      </div>
      <a class="pub" @click.prevent="publish">发布</a>
    </div>
    <div class="item">
      <input class="title-i" v-model="title" type="text" name="title" placeholder="标题，字数10字以上">
    </div>
    <div class="edit-area">
      <textarea class="text" name="content" v-model="content" placeholder="说点啥.."></textarea>
    </div>
  </section>
</template>
<script>
  import { setTip } from '../../vuex/actions/doc_actions'
  export default {
    vuex: {
      getters: {
        accessToken: ({ userInfo }) => userInfo.accessToken
      },
      actions: {
        setTip
      }
    },
    data () {
      return {
        title: '',
        tab: '',
        content: ''
      }
    },
    methods: {
      publish () {
        if (this.title.length < 10) {
          this.setTip({
            text: '标题必须大于10个字符！'
          })
        }
        this.$http({
          url: '/api/v1/topics',
          method: 'POST',
          body: JSON.stringify({
            accesstoken: this.accessToken,
            title: this.title,
            tab: this.tab,
            content: this.content + '[来自酷炫的vue-cnode](https://github.com/wszgxa/vue-cnode)'
          })
        }).then((res) => {
          let data = JSON.parse(res.data)
          if (data.success) {
            this.setTip({
              text: '发表成功！'
            })
            this.$nextTick(() => {
              this.$route.router.go({
                name: 'detail',
                query: {
                  id: data.topic_id
                }
              })
            })
          } else {
            console.log(res)
            this.setTip({
              text: data.error_msg
            })
          }
        }).catch((err) => {
          let errData = JSON.parse(err.body)
          this.setTip({
            text: errData.error_msg
          })
        })
      }
    }
  }
</script>