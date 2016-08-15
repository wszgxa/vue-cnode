// content
import {
  SET_CONTENT
} from '../mutation_types'
const state = {
  // 保存第一页数据
  data: {
    index: {},
    good: {},
    share: {},
    ask: {},
    job: {}
  }
}

const mutations = {
  [SET_CONTENT] (state, tag, data, pageNum) {
    state.data[tag][pageNum] = data
  }
}

export default {
  state,
  mutations
}
