
<a href="https://github.com/GeeksB15/guia-referencia-js">voltar</a>

pacote npm utilizado

https://www.npmjs.com/package/puppeteer


```js

const puppeteer = require('puppeteer')
//const uuid = require('uuid')

const pdfConvert = async (url, path) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setDefaultNavigationTimeout(0); 
  await page.goto(url, { waitUntil: 'networkidle2' })
  await page.pdf({ path, printBackground: true, format: 'A4',  margin: { left: '0.5cm'} })
  await browser.close()
}

const filename = `notafiscal-${uuid.v4()}.pdf`
path = '/docs/' + filename
await pdfConvert(urlimpressao, path)