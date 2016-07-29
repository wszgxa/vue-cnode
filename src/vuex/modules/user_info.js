// content
import {
  SET_BASEINFO
} from '../mutation_types'
const state = {
  // 保存第一页数据
  id: '',
  accessToken: '',
  loginName: '',
  avatarUrl: ''
}

const mutations = {
  // 设置 token 登录名 头像
  [SET_BASEINFO] (state, data) {
    try {
      state.id = data.id
      state.accessToken = data.accesstoken
      state.loginName = data.loginname
      state.avatarUrl = data.avatar_url
    } catch (err) {
      console.log(err)
    }
  }
}

export default {
  state,
  mutations
}
