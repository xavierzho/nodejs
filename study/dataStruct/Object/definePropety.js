//定义对象中新属性或者修改原有的属性
let obj = {
    id: 1,
    pname: "小米",
    price: 1999
}
/*
参数
value:属性值
writable:是否可修改，默认false
enumerable:是否可以枚举(遍历)，默认为false
configurable:是否可以被删除或被再修改,默认为false
*/
Object.defineProperty(obj, //对象
    "num", //属性名字
    {
        value: 1000,//设置属性的值
    },
);
console.log(obj.num);
Object.defineProperty(obj, "price", { value: 99 });
console.log(obj);
Object.defineProperty(obj, "id", {
    writable: false,
    enumerable: false,
});
obj.id = 0
console.log(obj);
console.log(Object.keys(obj));//[ 'pname', 'price' ]
Object.defineProperty(obj, "price", { configurable: false });
delete obj.price
console.log(obj);
