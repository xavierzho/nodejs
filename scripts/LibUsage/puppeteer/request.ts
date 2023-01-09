import puppeteer from 'puppeteer'
import Redis from 'ioredis'
import wes_list from './mult'
import SHA256 from 'crypto-js/sha256'
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
  const client = new Redis(process.env.redisURI as string)
  client.spop('baidu:requests', (err, res) => {
    if (res) {
      request(res as string).then(console.log)
      const hash = SHA256(res as string)
      client.sadd('baidu:dupefilter', hash.toString())
    }
  })
}, 10000)
