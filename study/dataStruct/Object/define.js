//对象定义
let d = new Date(); // 内置对象

let obj = {
    //自定义对象
    name: "jones",
    age: 18,
}
let f = new Function('a', 'b', `console.log(a+b)`);
console.log(d instanceof Object);
console.log(f instanceof Object)