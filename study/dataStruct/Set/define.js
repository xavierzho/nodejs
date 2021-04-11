const set = new Set()

let obj = {
    uname: "jones",
    age: 18,
    sex: "male",
}
// 追加进集合
set.add("jonescy")
set.add(12312)
set.add(obj)

console.log(set)
// 重复追加不会报错
set.add(obj)
console.log(set)
// 判断集合中是否有值
console.log(set.has(obj))

// 集合的大小
console.log(`当前集合的大小:${set.size}`)
// 删除一个值
set.delete("jonescy")
console.log(set)

// 清空集合
set.clear()
console.log(set)
