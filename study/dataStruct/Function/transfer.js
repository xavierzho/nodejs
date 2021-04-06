"use strict";
//函数调用的方式
//1.普通函数，非严格模式下浏览器中指向是window，
function fn() {
    console.log("普通函数this指向：", this);
};
// fn();
fn.call();
//2.对象函数，匿名函数指向调用者
var o = {
    name: "jones",
    sayHi: () => {
        console.log("对象箭头函数this指向", this);//箭头函数是不绑定this所以指向的是window
    },
    sayHello: function () {
        console.log("对象匿名函数this指向", this.name);//o对象
    }
}
o.sayHi();
o.sayHello();
//3.构造函数，原型对象指向的也是"实例对象"
function Star() { console.log("构造函数this指向实例对象", this); };
let ldh = new Star();
//4.绑定事件,this指向的按钮对象
// var btn = document.querySelector(".btn");
// btn.onclick = () => { console.log("绑定事件this指向", this)}; //指向的是window
// btn.onclick = function () {
//     console.log("绑定事件this指向", this) //指向的是btn对象
// };
//5.定时器函数，this在浏览器中指向是window
setTimeout(function () {
    console.log("定时器自动调用函数", this); //this是window对象
}, 1000); //定时器自动调用函数

setTimeout(() => {
    console.log("箭头函数定时器自动调用函数", this); //this是window对象
}, 1000); //定时器自动调用函数

//6.立即执行函数，非严格模式下浏览器中指向是window
(async () => { console.log("立即执行箭头函数", this); })();//箭头函数指向的window
(function () {
    console.log("立即执行匿名函数", this); //非严格模式下浏览器中指向是window
})();

