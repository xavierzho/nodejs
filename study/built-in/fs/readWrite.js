const fs = require("fs");
const path = require("path");
let data = "/prefetch:# arguments to use when launching various process types. It has been observed that when file reads are consistent for 3 process launches with the same /prefetch:# argument, the Windows prefetcher starts issuing reads in batch at process launch. Because reads depend on the process type, the prefetcher wouldn't be able to observe consistent reads if no /prefetch:# arguments were used. Note that the browser process has no /prefetch:# argument; as such all other processes must have one in order to avoid polluting its profile. Note: # must always be in [1, 8]; otherwise it is ignored by the Windows prefetcher. ↪"
fs.writeFile(path.resolve(__dirname, "test.txt"), data, (err) => {
    // callback func
    if (err) {
        console.log(err)
    } else {
        console.log("保存成功！")
    }
})
fs.readFile(path.resolve(__dirname, "test.txt"), (err, buffer) => {
    // buffer is data
    console.log(buffer.toString())
})