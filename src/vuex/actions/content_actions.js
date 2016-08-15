import * as types from '../mutation_types'
import { setMsg } from '../../tool'
import Vue from 'vue'
export const setContent = ({ dispatch, state }, tag, pageNum, callback) => {
  if (state.content.data[tag][pageNum]) return callback(setMsg(true, '获取缓存数据'))
  Vue.http({
    url: '/api/v1/topics',
    method: 'GET',
    params: {
      page: pageNum,
      limit: 20,
      tab: tag === 'index' ? '' : tag
    }
  }).then(res => {
    let data = JSON.parse(res.data)
    if (data.success) {
      dispatch(types.SET_CONTENT, tag, data.data, pageNum)
      callback(setMsg(true, '成功'))
    } else {
      callback(setMsg(false, data.error_msg))
    }
  }).catch(err => {
    console.log(err)
    callback(setMsg(false, '接口调用出错'))
  })
}
