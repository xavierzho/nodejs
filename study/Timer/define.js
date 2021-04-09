/*
var id = setTimeout(fn, delay);
-- 初始化一个计时器，然后在指定的时间间隔后执行。该函数返回一个唯一的标志ID（Number类型），我们可以使用它来取消计时器。
var id = setInterval(fn, delay);
-- 和setTimeout有些类似，但它是连续调用一个函数（时间间隔是delay参数）直到它被取消。
clearInterval(id);, clearTimeout(id);
-- 使用计时器ID（setTimeout 和 setInterval的返回值）来取消计时器回调的发生。
*/

let datetime = new Date()
console.log(datetime.getSeconds());
let id = setTimeout(()=>{
    console.log(datetime.getSeconds());
},10000)
// 立即取消
clearTimeout(id)

