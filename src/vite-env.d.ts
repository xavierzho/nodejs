/// <reference types="vite/client" />

declare global {
  interface Window {
    puppeteer?: any
    chrome?: {
      runtime: any
    }
  }
}
