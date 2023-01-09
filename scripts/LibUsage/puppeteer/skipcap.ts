// const randomUseragent = require('random-useragent');

import puppeteer from 'puppeteer'
import type { Browser, Page } from 'puppeteer'
//Enable stealth mode
import puppeteer_extra from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
puppeteer_extra.use(StealthPlugin())

const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36'

async function createPage(browser: Browser, url: string): Promise<Page> {
  //Randomize User agent or Set a valid one
  // const userAgent = randomUseragent.getRandom();
  const UA = USER_AGENT
  const page = (await browser.pages())[0]

  //Randomize viewport size
  // await page.setViewport({
  //     width: 1920 + Math.floor(Math.random() * 100),
  //     height: 3000 + Math.floor(Math.random() * 100),
  //     deviceScaleFactor: 1,
  //     hasTouch: false,
  //     isLandscape: false,
  //     isMobile: false,
  // });

  await page.setUserAgent(UA)
  await page.setJavaScriptEnabled(true)
  await page.setDefaultNavigationTimeout(0)

  //Skip images/styles/fonts loading for performance
  await page.setRequestInterception(true)
  page.on('request', (req) => {
    if (
      req.resourceType() === 'stylesheet' ||
      req.resourceType() === 'font' ||
      req.resourceType() === 'image'
    ) {
      req.abort()
    } else {
      req.continue()
    }
  })
  await page.evaluateOnNewDocument(() => {
    // Pass webdriver check
    // const newProto = window.navigator
    // ;(newProto.webdriver as Navigator['webdriver']) = false
    // window.navigator as Navigator = newProto
  })
  await page.evaluateOnNewDocument(() => {
    // Pass webdriver check
    Object.defineProperty(navigator, 'webdriver', {
      get: () => false
    })
  })

  await page.evaluateOnNewDocument(() => {
    // Pass chrome check
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.chrome = {
      runtime: {}
      // etc.
    }
  })

  await page.evaluateOnNewDocument(() => {
    //Pass notifications check
    const originalQuery = window.navigator.permissions.query
    return async (parameters: PermissionDescriptor) => {
      return parameters.name === ('notifications' as PermissionName)
        ? await Promise.resolve({ state: Notification.permission })
        : await originalQuery(parameters)
    }
  })

  await page.evaluateOnNewDocument(() => {
    // Overwrite the `plugins` property to use a custom getter.
    Object.defineProperty(navigator, 'plugins', {
      // This just needs to have `length > 0` for the current test,
      // but we could mock the plugins too if necessary.
      get: () => [1, 2, 3, 4, 5]
    })
  })

  await page.evaluateOnNewDocument(() => {
    // Overwrite the `languages` property to use a custom getter.
    Object.defineProperty(navigator, 'languages', {
      get: () => ['en-US', 'en']
    })
  })

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 })
  return page
}
async function main() {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreDefaultArgs: ['--enable-automation', '--password-store'],
    args: ['--auto-open-devtools-for-tabs'],
    defaultViewport: null
  })
  const page = await createPage(browser, `https://www.taobao.com/`)
  await page.click('.site-nav-sign>a')
  await page.waitForSelector('#fm-login-id')
  const loginId = await page.$('#fm-login-id')
  const loginPwd = await page.$('#fm-login-password')
  await loginId?.type('')
  await loginPwd?.type('')
  await page.click('.fm-btn>button')
  await page.once('framenavigated', async () => {
    await page.waitForSelector('#logo', { timeout: 1000 })
    await page.click('#logo')
  })
  await page.goto('')
}
main().then(console.log)
