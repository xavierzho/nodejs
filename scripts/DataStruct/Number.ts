export {}
// number init
const num1 = 1 // number
const num2 = 1.1 // number
const num3 = 0x1 // 16进制
const num4 = 0b1 // 2进制
const num5 = 0o1 // 8进制
const num6 = 1e1 // 科学计数法
const num7 = NaN // not a number
const num8 = Infinity // 无穷大
const num9 = -Infinity // 无穷小
const num10 = Number('1') // string to number
// string number to number
console.log(parseInt('1231231231')) //1231231231
console.log(parseInt('11.11')) //11
console.log(parseInt('1231asdjqjqwe2131')) // 1231
console.log(parseInt('asdasd21311asdasd')) //NaN

console.log(parseFloat('11.111')) //11.111
