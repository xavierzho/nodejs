export {}
const s1 = 'jones'
const s2 = 'jones'
const s3 = `asdasdasd
asdad
asdad
`
const s5 = String(12412414)
console.log(typeof s1)
console.log(typeof s2)
console.log(typeof s3)
console.log(typeof s5)

// format
console.log(`hello ${s1}`)

const str = `    jones|cy
`

//删除字符串左右两边的空白字符串
console.log(str.trim())

//返回索引下标的字符
console.log(str.charAt(4))

//字符串切片类似于python str[n:m]
console.log(str.slice(4, 9))
console.log(str.substring(10, 12))

//按照指定符号切个字符串
console.log(str.split('|', 3))

// 替换非空字符串
console.log(str.replace('cy', 'cyna'))

// 字串的索引
console.log(str.indexOf('cy'))

//大小写转化
console.log(str.toUpperCase())
console.log(str.toLowerCase())
