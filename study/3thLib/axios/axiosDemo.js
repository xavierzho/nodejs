const axios = require("axios");
const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36";

axios.get("https://www.baidu.com",{
    headers:{"user-agent":ua}
}).then(value => {
    //response在data属性里
    console.log(value.data)
})