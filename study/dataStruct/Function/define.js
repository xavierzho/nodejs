
//具名函数
function func() {

}
//匿名函数
let fn = function () { };

//new Function(Arg1,Arg2,funcBody:string)
let f = new Function('a','b',`console.log(a+b)`);
f(2, 3);
//所有函数都是Function的实例

// 箭头函数
(async() => {
    console.log("箭头函数")
})()
