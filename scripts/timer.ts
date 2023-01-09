export {}
const datetime = new Date()
console.log(datetime.getSeconds())
const id = setTimeout(() => {
  console.log(datetime.getSeconds())
}, 10000)
// 立即取消
clearTimeout(id)
