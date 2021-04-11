var s = new Set([1, 2, 3, 4, 5, 6]);
// Set.prototype.keys()：返回键名的迭代器
console.log(s.keys());
//Set.prototype.values()：返回键值的迭代器
console.log(s.values());
// Set.prototype.entries()：返回键值对的迭代器
console.log(s.entries());
//Set.prototype.forEach()：使用回调函数遍历每个成员
s.forEach(function (x) {
    console.log(x);
});
// applications
// 扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构。
var strSet = new Set(['red', 'green', 'blue']);
var arr = Array.from(strSet);
// ['red', 'green', 'blue']
console.log(arr);
// 间接使用map和filter方法
s = new Set(Array.from(s).map(function (x) { return x * x; }));
console.log(s);
