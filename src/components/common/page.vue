<style lang="styl" src="../../assets/styl/common/page.styl" scoped></style>
<template>
  <div class="page-num">
    <a
      @click="handleUrl('pre')"
      :class="{'shadow': pageNum === 1}">前一页</a>
    <span>{{pageNum}}</span>
    <a @click="handleUrl('next')">下一页</a>
  </div>
</template>
<script>
  export default {
    vuex: {
      getters: {
        routeName: ({ route }) => route.name,
        pageNum: ({ route }) => parseInt(route.params.page)
      }
    },
    methods: {
      handleUrl (type) {
        let self = this
        switch (type) {
          case 'pre':
            if (this.pageNum === 1) {
              return
            }
            this.$route.router.go({
              path: `/${self.routeName}/${self.pageNum - 1}`
            })
            break
          case 'next':
            this.$route.router.go({
              path: `/${self.routeName}/${self.pageNum + 1}`
            })
            break
        }
      }
    }
  }
</script>