import fs from 'fs'
import path from 'path'
import md5 from 'crypto-js/md5'
export default function (src: string, dir: string) {
  const tail = src.match(/^data:image\/(\w+);base64,/)
  const base64data = src.replace(/^data:image\/\w+;base64,/, '')
  const buffer = new Buffer(base64data, 'base64')
  const md5h = md5(base64data)
  const md5Sr = md5h.toString()
  fs.writeFile(path.resolve(dir.concat(md5Sr + '.' + tail)), buffer, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log(md5Sr, ':保存成功！')
    }
  })
}
