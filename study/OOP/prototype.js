// 存储复杂数据类型的时候，重复开辟的空间浪费内存
// prototype构造函数原型，通过原型分配的函数的对象是共享的
// ES5的OOP
function Star(uname, age) {
    this.uname = uname
    this.age = age

}
let that;
// 追加到构造函数原型中
// Star.prototype.sing = function () {
//     console.log("i am singer!");
// }
// Star.prototype.movie = function () {
//     console.log("I an movier!");
// }
// 修改了原来的原型对象，给原型对象赋值的是一个对象，需要手动指向原来的constructor
Star.prototype = {
    constructor: Star,
    sing: function () {
        that = this
        console.log("i am singer!");
    },
    movie: function () {
        console.log("I an movier!");
    }
}
let ldh = new Star('刘德华', 18);
let zxy = new Star('张学友', 19);
ldh.sing()
zxy.movie()
console.log(ldh.__proto__); //实例对象自带一个__proto__指向prototype
console.log(ldh.__proto__ === Star.prototype); // true

console.log(ldh.__proto__.constructor);
console.log(Star.prototype.constructor);
console.log(Star.prototype.__proto__); //Object.prototype
console.log(Object.prototype.__proto__); // null
// ldh.__proto__ => Star.prototype.__proto__ => Object.prototype.__proto__  称为原型链，查找成员的线路

//---成员查找机制：原型链---
// ldh.sex = "male" //优先查找本身
// Star.prototype.sex = "female" //查找原型链上的next
// Object.prototype.sex = "male" //查到Object为止(Object.prototype.__proto__===null)
console.log(ldh.sex);//查找不到undefined
console.log(Object.prototype.toString() === ldh.toString()); // Object特有的方法：toString()，通过实例对象也能查找到
//---原型对象中this指向---
//1.构造函数的this指向的是实例对象
//2.原型对象中的this也是指向实例对象
ldh.sing()
console.log(that === ldh);

// ---扩展内置对象---
Array.prototype.sum = function () {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i]
    }
    return sum
}
let arr = [1, 2, 3, 4, 5]
console.log(arr.sum());
console.log(Array.prototype);
console.log(`---ES5继承，通过构造函数+原型对象模拟继承，实现组合继承---`);
//---ES5继承，通过构造函数+原型对象模拟继承，实现组合继承---
//call方法
function fn(x, y) {
    console.log("我想喝手磨咖啡");
    console.log(this); //这个this是window对象
    console.log(x + y);
}
fn(1, 2);
// 调用函数，也可以修改this指向
var o = {
    name: 'jones'
}
fn.call(o, 1, 3); // 改变this指向
// 父构造函数
function Father(name, age) {
    // this指向父构造函数的实例
    this.name = name
    this.age = age
}
Father.prototype.money = function () {
    console.log(10000);
}
// 子构造函数
function Son(name, age, score) {
    // this指向子构造函数的实例
    Father.call(this, name, age) //继承属性
    this.score = score
}
// Son.prototype = Father.prototype // 修改了子原型对象，父原型对象也改变
// 方法继承
Son.prototype = new Father(); //原型链的实现的方法之一；
Son.prototype.exem = function () {
    console.log("孩子需要考试");
}
let son = new Son('jones', 18,100);
console.log(son);
son.money()