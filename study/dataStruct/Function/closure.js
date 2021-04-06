"use strict";

function fn() {
    // 闭包函数，内部函数调用内部的变量
    let age = 18;
    return (() => {
        console.log(age);
        return age
    });
}
let f = fn();
console.log(f());
//闭包的应用

