export default {
  launchOptions: {
    headless: false,
    // devtools: true,
    defaultViewport: null,
    ignoreDefaultArgs: ['--enable-automation'],
    // userDataDir: "./spider/userData"
    // executablePath:"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    args: [
      '--no-sandbox', // 禁用沙盒
      '-–no-zygote',
      '--disable-dev-shm-usage', // 禁用共享内存
      '--disable-extensions', //禁用扩展
      '-–disable-gpu', //禁用GPU
      // "-–disable-setuid-sandbox", // linux only
      '-–no-first-run',
      '–-single-process' //单进程
    ]
    // ignoreHTTPSErrors: true,
  },
  account: {
    un: process.env.un,
    pwd: process.env.pwd
  }
}
