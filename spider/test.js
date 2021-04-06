const crypto = require("crypto");
const fs = require("fs");
// const base64 = require()
// axios.get(
    // "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF",
    // {
    //     headers: {"user-agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36`},
    //     responseType: "stream",
    // }).then(
    // (response) => {
    //     console.log(response.headers)
    //     // const writer = fs.createWriteStream("./img.jpg")
    //     // response.data.pipe(writer);
    // }

// )

let bitmap = fs.readFileSync('./img.jpg');

// let base64str = Buffer.from(bitmap, 'binary').toString('base64'); // base64编码
let base64str = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0"
// base64str.replace(/^data:image\/\w+;base64,/,"")
let res = base64str.match(/^data:image\/(\w+);base64,/)
let md5str = crypto.createHash("md5").update(base64str).digest("hex")
console.log(md5str)
