// doc state 需要一些变量来记录文档状态
import {
  SET_DOC_MENU
} from '../mutation_types'
const state = {
  // 保存第一页数据
  menuState: false
}

const mutations = {
  // 设置侧边栏显示状态
  [SET_DOC_MENU] (state, tag) {
    state.menuState = tag
  }
}

export default {
  state,
  mutations
}
