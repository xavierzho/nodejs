import puppeteer from 'puppeteer'
import config from './default'
import srcToImg from './srcToImg'
;(async (keyword) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  })
  const page = (await browser.pages())[0]

  await page.goto(`https://pic.sogou.com/pics?query=${keyword}`) //访问哪个网站

  // await page.waitForSelector(".img-layout>a>img:last-child")
  // let srcList: string[]
  await page.$$eval('.img-layout>a>img', (elements) => {
    const srcList = elements.map((ele) => ele.src)
    srcList.forEach((src) => {
      srcToImg(src, config.app)
    })
  })

  await browser.close()
})('狗')
