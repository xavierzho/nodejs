const puppeteer = require("puppeteer");
const {insertMany} = require("./mongo");
const dbName = "ECommerce";
const colName = "jd";
let products = []

async function parseItems(page) {
    // 解析单页
    let item = await page.$$eval(".gl-item>.gl-i-wrap", (items) => items.map((x) => {
        return {
            title: x.querySelector(".p-name>a>em").innerText,
            price: x.querySelector(".p-price>strong").innerText,
            shop: x.querySelector(".p-shop>span>a").innerText,
            shop_link: x.querySelector(".p-shop>span>a").href,
            title_link: x.querySelector(".p-name>a").href,
            tags: [...x.querySelectorAll(".p-icons>i")].map((x) => {
                return x.innerText
            }),
        }
    }));
    products = products.concat(item)
}

(async (keyword) => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = (await browser.pages())[0];
    await page.goto(`https://www.jd.com/`);
    // 选择搜索框输入内容
    await (await page.$("#key")).type(keyword);
    //点击搜索按钮
    await page.click(".button");
    // 等待下一页按钮加载，并滑动到下一页元素
    const nextPage = await page.waitForSelector(".pn-next")
    await page.$eval(".pn-next", btnEle => btnEle.scrollIntoView());

    await parseItems(page);
    await insertMany(products,dbName,colName)
    await nextPage.click();
    await browser.close();

})("华为手机");