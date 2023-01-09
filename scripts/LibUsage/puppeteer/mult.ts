import Redis from 'ioredis'
import puppeteer from 'puppeteer'
import settings from './settings'
const MAX_WSE = 2 //启动多少个浏览器
const wes_list: string[] = [] //存储browserWSEndpoint列表
let browserWSEndpoint
  // 请求到达->连接Chromium->打开tab页->运行代码->关闭tab页->返回数据

  // 初始化浏览器状态
;(async () => {
  for (let i = 0; i < MAX_WSE; i++) {
    const browser = puppeteer.launch(settings.launchOptions)
    browserWSEndpoint = (await browser).wsEndpoint()
    wes_list[i] = browserWSEndpoint
  }
  const redis = new Redis(process.env.redisURI!)
  redis.sadd('wes_list', wes_list)
})()

export default wes_list
