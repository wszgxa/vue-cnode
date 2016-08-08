/**
 * @export
 * @param {any} request
 * @param {any} next
 * @returns
   */
import store from './vuex/store'
// 全局错误处理，全局loading
import { setLoading, setTip } from './vuex/actions/doc_actions'
export default function (request, next) {
  if (request.tip !== false) {
    setLoading(store, true)
  }
  next((res) => {
    setLoading(store, false)
    let data = JSON.parse(res.data)
    if (res.status === 0) {
      setTip(store, {
        text: '网络不给力，请稍后再试'
      })
    }
    if (!data.success) {
      setTip(store, {
        text: data.error_msg
      })
    }
  })
}
