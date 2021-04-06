"use strict";

//改变this指向的三种方法bind(),call(),apply()
//1.call(),
// 1.1调用函数
// 1.2改变this指向,
// 1.3实现继承
var obj = {
    name: 'jones'
}
function fn(x, y) {
    console.log(this);
    console.log(x + y);
}
fn.call(obj, 1, 2);
//2.bind()
//2.1改变this指向
//2.2不会调用函数
//2.3返回值是一个新的函数
fn.bind(obj, 1, 2)();
//2.4应用场景，事件绑定
let btn = document.querySelector('button')
btn.onclick = () => {
    this.disable = true;
    setTimeout((function() { this.disable = false }).bind(this), 3000)
}
//3.apply()
// 3.1调用函数，
// 3.2改变this指向，
// 3.3与call传参方式不同，

fn.apply(obj, [1, 2]);
// 3.4借助其他函数功能
var arr = [1, 66, 3, 99, 4];
console.log(Math.max.apply(Math, arr));
console.log(Math.max(...arr));