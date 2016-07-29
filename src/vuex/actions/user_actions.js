import * as types from '../mutation_types'
import { setMsg } from '../../tool'
import Vue from 'vue'
let localStorage = window.localStorage
let storeBaseInfo = function (data) {
  localStorage.setItem('cnodeBaseInfo', JSON.stringify(data))
}
export const getStore = ({dispatch, state}) => {
  if (localStorage.getItem('cnodeBaseInfo')) {
    let data = JSON.parse(localStorage.getItem('cnodeBaseInfo'))
    dispatch(types.SET_BASEINFO, data)
  }
}
export const setBaseInfo = ({ dispatch, state }, token, callback) => {
  Vue.http({
    url: '/api/v1/accesstoken',
    method: 'POST',
    body: JSON.stringify({
      accesstoken: token
    }),
    headers: {
      contentType: 'application/x-www-form-urlencoded'
    }
  }).then(function (res) {
    let data = JSON.parse(res.data)
    if (data.success) {
      data.accesstoken = token
      delete data.success
      storeBaseInfo(data)
      dispatch(types.SET_BASEINFO, data)
      callback(setMsg(true, '登录成功'))
    } else {
      console.log(data.error_msg)
      callback(setMsg(false, data.error_msg))
    }
  }).catch(err => {
    let errBody = JSON.parse(err.body)
    console.log(errBody.error_msg)
    callback(setMsg(false, errBody.error_msg))
  })
}
