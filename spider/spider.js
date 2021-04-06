"use strict";
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

(async () => {
    let data = [];

    const browser = await puppeteer.launch({
        headless: false,
        userDataDir: path.resolve(__dirname, "userData"),
    });
    const page = await browser.newPage();

    for (let month = 1; month < 12; month++) {
        for (let pg = 1; pg <= 10; pg++) {
            month = month.toString().padStart(2, "0");
            await page.goto(
                "https://www.bilibili.com/v/music/cover/?spm_id_from=333.5.b_7375626e6176.3#" +
                `/all/click/0/${pg}/2020-${month}-01,2020-${month}-29`
            );

            await page.waitForSelector(".vd-list-cnt > ul > li > div > div.r > a");

            const titles = await page.$$eval(".vd-list-cnt > ul > li > div > div.r > a", (links) => [...links].map(x => x.innerText));

            console.log(titles);
            data = data.concat(titles);
        }
    }

    fs.writeFile("data.json", JSON.stringify(data, null, "\t"), function (err) {
        if (err) {
            console.log(err);
        }
    });
    await browser.close();
})();