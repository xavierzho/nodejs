const puppeteer = require("puppeteer");
const Redis = require("ioredis");
const {wes_list} = require("./mult");
const crypto = require("crypto");
const request = async (url) => {


    let tmp = Math.floor(Math.random() * 2);
    console.log(tmp)
    const browser = await puppeteer.connect({
        browserWSEndpoint: wes_list[tmp]
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForTimeout(500);
    await page.close();


}
setTimeout(()=>{
    const sha256 = crypto.createHash("sha256")
    const client = new Redis(process.env.redisURI)
    client.spop("baidu:requests", (res) => {
        if (res) {
            request(res)
            sha256.update(res)
            client.sadd("baidu:dupefilter", sha256.digest())
        }
    })
},10000)