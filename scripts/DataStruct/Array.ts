export {}
// array init
const arr1 = [1, 2, 3, 4, 5]
const arr2 = Array.from(arr1)
const arr3 = new Array(4)
// array fill to 1
arr3.fill(1)

// array concat
const arr4 = arr3.concat(arr2)
console.log(arr4)
// filter > 2 return new array
const arr5 = arr1.filter((item) => item > 2)
console.log(arr5)
// map return new array
const arr6 = arr1.map((item) => item * 2)
console.log(arr6)
// some like filter data
const arr7 = arr1.some((item) => item > 2)
console.log(arr7)
