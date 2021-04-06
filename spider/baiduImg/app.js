"use strict";
const puppeteer = require("puppeteer");
// const {path} = require("./default");
// const {srcToImg} = require("./srcToImg");

(async (keyword) => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });
    const page = (await browser.pages())[0];

    await page.goto(`https://pic.sogou.com/pics?query=${keyword}`);//访问哪个网站

    // await page.waitForSelector(".img-layout>a>img:last-child")
    const srcList = await page.$$eval(
        ".img-layout>a>img",
        (elements) => {
            elements.map((ele) => {
                ele.src
            })
        })
    console.log(srcList)
    // srcList.forEach(src => {
    //     srcToImg(src, path);
    // })

    // await browser.close()
})('狗');
