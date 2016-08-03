// 过滤器

let myFilter = {}

myFilter.install = function (Vue) {
  Vue.filter('fullDate', val => {
    let date = new Date(val)
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}
    ${date.getHours()}:${date.getMinutes()}`
  })
}
export default myFilter
