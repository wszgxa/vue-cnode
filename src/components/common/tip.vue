<template>
  <div v-if="tipVisible" class="tip">
    <div class="tip-wrap">
      <p>{{ tip.text }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    vuex: {
      getters: {
        tip: ({ docState }) => docState.tip
      }
    },
    data () {
      return {
        tipVisible: false
      }
    },
    watch: {
      tip: 'tipShow'
    },
    methods: {
      tipShow () {
        let self = this
        self.tipVisible = true
        setTimeout(function () {
          self.tipVisible = false
          if (self.tip.callback) {
            self.tip.callback()
          }
        }, self.tip.time)
      }
    }
  }
</script>

<style lang="styl" scoped>
// 阻止其他点击事件
.tip 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 100%;
.tip-wrap 
  box-sizing: border-box;
  position: fixed;
  left: 50%;
  top: 30%;
  width: 80%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, .7);
  text-align: center;
  color: #fff;
  border-radius: 5/75rem;
  line-height: 3;
  p 
    display: inline-block;
    line-height: 2;
</style>
