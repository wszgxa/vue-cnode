import * as types from '../mutation_types'

// 设置菜单栏状态
export const setMenu = ({dispatch}, tag) => {
  dispatch(types.SET_DOC_MENU, tag)
}
