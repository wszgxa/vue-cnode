import * as types from '../mutation_types'

// 设置菜单栏状态
export const setMenu = ({dispatch}, tag) => {
  dispatch(types.SET_DOC_MENU, tag)
}
export const setTip = ({dispatch}, tip) => {
  if (!tip.time) tip.time = 2000 // 默认tip展现时间
  dispatch(types.SET_TIP, tip)
}
export const setLoading = ({dispatch}, state) => {
  dispatch(types.SET_LOADING, state)
}
