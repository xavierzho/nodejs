
let str = `    jones|cy
`;


//删除字符串左右两边的空白字符串
console.log(str.trim());

//返回索引下标的字符
console.log(str.charAt(4));

//字符串切片类似于python str[n:m]
console.log(str.slice(4, 9));
console.log(str.substring(10, 12));

//按照指定符号切个字符串
console.log(str.split('|',3));

// 替换非空字符串
console.log(str.replace("cy", "cyna"));

// 字串的索引
console.log(str.indexOf("cy"));

//大小写转化
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// 字符串拼接
console.log(str.concat("12312141"));