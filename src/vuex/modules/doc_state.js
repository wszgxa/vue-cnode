// doc state 需要一些变量来记录文档状态
import {
  SET_DOC_MENU,
  SET_TIP,
  SET_LOADING
} from '../mutation_types'
const state = {
  // 保存第一页数据
  menuState: false,
  tip: {
    text: '',
    time: 2000,
    callback: null
  },
  loading: false
}

const mutations = {
  // 设置侧边栏显示状态
  [SET_DOC_MENU] (state, tag) {
    state.menuState = tag
  },
  [SET_TIP] (state, tip) {
    state.tip = tip
  },
  [SET_LOADING] (state, loading) {
    state.loading = loading
  }
}

export default {
  state,
  mutations
}
