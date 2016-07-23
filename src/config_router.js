export function configRouter (router) {
  router.map({
    '/': {
      name: 'index',
      title: '全部',
      component: (resolve) => require(['./components/main/main.vue'], resolve)
    }
  })
}
