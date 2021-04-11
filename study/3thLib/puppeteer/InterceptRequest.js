const puppeteer = require("puppeteer");
const axios = require("axios").default;
const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36";
const checkHandler = async (page) => {
    //打开请求拦截
    await page.setRequestInterception(true);
    await page.on("request", async (req) => {
        if (req.resourceType() !== "script") {
            await req.continue()
        }
        const url = req.url()
        await new Promise((resolve, reject) => {
            // 使用request/axios等请求库获取js文件
            axios.get(url, { headers: { "User-Agent": ua } }).then((resp) => {
                // 删掉navigator.webdriver
                // 这里不排除有其它特征检测，每个网站需要定制化修改
                let newRes = `navigator.webdriver && delete Navigator.prototype.webdriver;
                navigator.plugins.length === 0 && Object.defineProperty(navigator, 'plugins', {get: () => [1, 2, 3]});
                navigator.languages !== ["zh-CN", "zh"]&&Object.defineProperty(navigator,"languages",{get:()=>["zh-CN", "zh"]});
                ` + resp.data
                // 返回删掉了webdriver的js
                req.respond({
                    body: newRes
                })
                resolve("请求成功!传递的参数")
                reject("请求失败!传递的参数")
            });

        }).then((data) => {
            console.log(data)
        }).catch((reason) => {
            console.log(reason)
        })
    })
}
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: undefined,
        ignoreDefaultArgs: ['--enable-automation'],
        devtools: true
    });
    // await browser.userAgent()
    const page = (await browser.pages())[0];
    await page.setUserAgent(ua)

    // await page.evaluateOnNewDocument(() => {
    //     Object.defineProperty(navigator, 'webdriver', {get: () => false});
    //     Object.defineProperty(navigator, "languages", {get: () => ["en", 'en-US']});
    //     Object.defineProperty(navigator, "plugins", {get: () => [1, 2, 3]});
    //     window.navigator.chrome = {runtime: {}};
    // })

    await checkHandler(page)
    await page.goto("https://www.baidu.com")
    const newPage = await browser.newPage();

    await checkHandler(newPage)
    await newPage.goto("http://www.sogo.com")
})();