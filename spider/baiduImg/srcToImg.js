const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
module.exports = ((src, dir) => {
    let tail = src.match(/^data:image\/(\w+);base64,/)
    let base64data = src.replace(/^data:image\/\w+;base64,/,"")
    let buffer = new Buffer(base64data,"base64")
    let md5 = crypto.createHash('md5')
    md5.update(base64data)
    let md5Sr = md5.digest("hex");
    fs.writeFile(path.resolve(dir.concat(md5Sr,".",tail)), buffer, (err)=>{
        if (err){
            console.log(err)
        }else {
            console.log(md5Sr,":保存成功！")
        }
    })
})
