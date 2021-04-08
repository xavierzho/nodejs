"use strict";

const Redis = require("ioredis");
const redis = new Redis(process.env.redisURI); // 读取环境变量里的redisURI

redis.sadd("baidu:requests","https://www.baidu.com/").then((res) => {
    if (res === 0) {
        console.log("该值已经存在");
    } else {
        console.log("添加成功");
    }

})

redis.quit()


