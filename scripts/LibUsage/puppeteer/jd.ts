import puppeteer from 'puppeteer'
import type { Page } from 'puppeteer'

import { insertMany } from '../db/mongodb/mongodb'
const dbName = 'ECommerce'
const colName = 'jd'
interface Product {
  title: string
  price: string
  shop: string
  shop_link: string
  title_link: string
  tags: string[]
}
let products: Product[] = []

async function parseItems(page: Page) {
  // 解析单页
  const item = await page.$$eval('.gl-item>.gl-i-wrap', (items) =>
    items.map((x): Product => {
      return {
        title: (x.querySelector('.p-name>a>em') as HTMLElement).innerText,
        price: (x.querySelector('.p-price>strong') as HTMLElement).innerText,
        shop: (x.querySelector('.p-shop>span>a') as HTMLElement).innerText,
        shop_link: (x.querySelector('.p-shop>span>a') as HTMLLinkElement).href,
        title_link: (x.querySelector('.p-name>a') as HTMLLinkElement).href,
        tags: [...x.querySelectorAll('.p-icons>i')].map((x) => (x as HTMLElement).innerText)
      }
    })
  )
  products = products.concat(item)
  // products.push(item)
}

;(async (keyword) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  })

  const page = (await browser.pages())[0]
  await page.goto(`https://www.jd.com/`)
  // 选择搜索框输入内容
  await page.type('#key', keyword)
  //点击搜索按钮
  await page.click('.button')
  // 等待下一页按钮加载，并滑动到下一页元素
  const nextPage = await page.waitForSelector('.pn-next')
  await page.$eval('.pn-next', (btnEle) => btnEle.scrollIntoView())

  await parseItems(page)
  await insertMany(products, dbName, colName)
  await nextPage!.click()
  await browser.close()
})('华为手机')
