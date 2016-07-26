// content
import {
  SET_CONTENT,
  ADD_CONTENT
} from '../mutation_types'
const state = {
  // 保存第一页数据
  index: []
}

const mutations = {
  [SET_CONTENT] (state, tag, data) {
    state[tag] = data
  },
  [ADD_CONTENT] (state, tag, data) {
    state[tag] = state[tag].concat(data)
  }
}

export default {
  state,
  mutations
}
