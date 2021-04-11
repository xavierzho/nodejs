let s = new Set([1, 2, 3, 4, 5, 6])

// Set.prototype.keys()：返回键名的迭代器
console.log(s.keys())

//Set.prototype.values()：返回键值的迭代器
console.log(s.values())
// Set.prototype.entries()：返回键值对的迭代器
console.log(s.entries())

//Set.prototype.forEach()：使用回调函数遍历每个成员
s.forEach((x) => {
    console.log(x)
})

// applications
// 扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构。

let strSet = new Set(['red', 'green', 'blue']);
let arr = Array.from(strSet);
// let arr = [...strSet]
console.log(arr);

// 间接使用map和filter方法
s = new Set(Array.from(s).map((x) => { return x * x }))
console.log(s);
s = new Set(Array.from(s).filter((x) => { return (x % 2) == 0 }))
console.log(s);


let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([Array.from(a), Array.from(b)]);
// Set {1, 2, 3, 4}
console.log(union);

// 交集
let intersect = new Set(Array.from(a).filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set(Array.from(a).filter(x => !b.has(x)));
// Set {1}
