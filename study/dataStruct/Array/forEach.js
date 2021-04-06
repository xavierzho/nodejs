//ES5新增的方法
let arr = [1, 2, 3, 4, 5]
let sum = 0;
arr.forEach((value, index,array) => {
    console.log(`数组元素：${value}`)
    console.log(`${value}元素索引:${index}`);
    console.log(`数组本身:${array}`);
    sum += value
})
console.log(sum);