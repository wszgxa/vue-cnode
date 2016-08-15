<style lang="styl" src="../../assets/styl/common/page.styl" scoped></style>
<template>
  <div class="page-num">
    <a
      @click="handleUrl('pre')"
      :class="{'shadow': pageNum === 1}">前一页</a>
    <span>{{$route.params.page}}</span>
    <a @click="handleUrl('next')">下一页</a>
  </div>
</template>
<script>
  export default {
    vuex: {
      getters: {
        pageNum: ({ route }) => parseInt(route.params.page)
      }
    },
    methods: {
      handleUrl (type) {
        let routeName = this.$route.name
        let pageNum = parseInt(this.$route.params.page)
        switch (type) {
          case 'pre':
            if (pageNum === 1) {
              return
            }
            this.$route.router.go({
              path: `/${routeName}/${pageNum - 1}`
            })
            break
          case 'next':
            this.$route.router.go({
              path: `/${routeName}/${pageNum + 1}`
            })
            break
        }
      }
    }
  }
</script>