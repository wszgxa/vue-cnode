export function configRouter (router) {
  router.map({
    '/index/:page': {
      name: 'index',
      title: '全部',
      component: (resolve) => require(['./components/main/index.vue'], resolve)
    },
    '/good/:page': {
      name: 'good',
      title: '精华',
      component: (resolve) => require(['./components/main/index.vue'], resolve)
    },
    '/share/:page': {
      name: 'share',
      title: '分享',
      component: (resolve) => require(['./components/main/index.vue'], resolve)
    },
    '/ask/:page': {
      name: 'ask',
      title: '问答',
      component: (resolve) => require(['./components/main/index.vue'], resolve)
    },
    '/job/:page': {
      name: 'job',
      title: '招聘',
      component: (resolve) => require(['./components/main/index.vue'], resolve)
    },
    '/login': {
      name: 'login',
      title: '登陆',
      component: (resolve) => require(['./components/login/login.vue'], resolve)
    },
    '/detail': {
      name: 'detail',
      title: '话题',
      component: (resolve) => require(['./components/detail/detail.vue'], resolve)
    },
    '/edit': {
      name: 'edit',
      title: '发布话题',
      component: (resolve) => require(['./components/edit/edit.vue'], resolve)
    },
    '/user/:username': {
      name: 'user',
      title: '用户',
      component: (resolve) => require(['./components/user/user_info.vue'], resolve)
    },
    '/message/:page': {
      name: 'msg',
      title: '消息',
      component: (resolve) => require(['./components/msg/msg.vue'], resolve)
    }
  })

  router.redirect({
    '/': '/index/1',
    '/message': '/message/1',
    '/good': '/good/1',
    '/share': '/share/1',
    '/ask': '/ask/1',
    '/job': '/job/1'
  })
  /**
   * fix ios title刷新不了的bug
   * @iframeLoad
   * @author hiluluke
   */
  const iframeLoad = function (src) {
    let iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = src
    document.body.appendChild(iframe)
    iframe.addEventListener('load', function () {
      setTimeout(function () {
        iframe.remove()
      }, 0)
    })
  }
  // document title change
  router.afterEach((transition) => {
    document.title = transition.to.title || 'CNode.js'
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      let src = '/static/fixrouter.html?' + Math.random()
      iframeLoad(src)
    }
  })
}
