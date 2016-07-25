// 过滤器

let myFilter = {}

myFilter.install = function (Vue) {
  Vue.filter('fullDate', val => {
    let date = new Date(val)
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
  })
  // format date
  Vue.filter('fulldate', val => {
    if (!val) {
      return val
    }
    let dateValue = new Date(val.replace(/-/g, '/'))
    return `${dateValue.getFullYear()}年${dateValue.getMonth() + 1}月${dateValue.getDate()}日`
  })
}
export default myFilter
