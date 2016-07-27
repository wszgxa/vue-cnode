export function configRouter (router) {
  router.map({
    '/': {
      name: 'index',
      title: '全部',
      component: (resolve) => require(['./components/main/index.vue'], resolve)
    },
    '/good': {
      name: 'good',
      title: '精华',
      component: (resolve) => require(['./components/main/index.vue'], resolve)
    },
    '/share': {
      name: 'share',
      title: '分享',
      component: (resolve) => require(['./components/main/index.vue'], resolve)
    },
    '/ask': {
      name: 'ask',
      title: '问答',
      component: (resolve) => require(['./components/main/index.vue'], resolve)
    },
    '/job': {
      name: 'job',
      title: '招聘',
      component: (resolve) => require(['./components/main/index.vue'], resolve)
    },
    '/detail': {
      name: 'detail',
      title: '话题',
      component: (resolve) => require(['./components/detail/detail.vue'], resolve)
    }
  })
}
