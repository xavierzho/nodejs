//过滤元素
let arr = [1, 11, 22, 33, 44, 55]

let flag = arr.some((value) => {
    // return value===30
    return value >= 30
})
console.log(flag);