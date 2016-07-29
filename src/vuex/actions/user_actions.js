import * as types from '../mutation_types'
import Vue from 'vue'

let storeBaseInfo = function (data) {
  window.localStorage.setItem('cnodeBaseInfo', JSON.stringify(data))
}
export const setBaseInfo = ({ dispatch, state }, token) => {
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
    } else {
      console.log(data.error_msg)
    }
  }).catch(err => {
    let errBody = JSON.parse(err.body)
    console.log(errBody.error_msg)
  })
}
