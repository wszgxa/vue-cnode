export function configRouter (router) {
  router.map({
    '/': {
      name: 'index',
      title: '主页',
      component: (resolve) => require(['./components/main/main.vue'], resolve)
    }
  })
}
