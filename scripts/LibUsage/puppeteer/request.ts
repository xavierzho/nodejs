import puppeteer from 'puppeteer'
import Redis from 'ioredis'
import wes_list from './mult'
import * as Crypto from 'crypto'
const request = async (url: string) => {
  const tmp = Math.floor(Math.random() * 2)
  console.log(tmp)
  const browser = await puppeteer.connect({
    browserWSEndpoint: wes_list[tmp]
  })
  const page = await browser.newPage()
  await page.goto(url)
  await page.waitForTimeout(500)
  await page.close()
}
setTimeout(() => {
  const sha256 = Crypto.createHash('sha256')
  const client = new Redis(process.env.redisURI as string)
  client.spop('baidu:requests', (err, res) => {
    if (res) {
      request(res as string).then(console.log)
      sha256.update(res as string)
      client.sadd('baidu:dupefilter', sha256.digest())
    }
  })
}, 10000)
