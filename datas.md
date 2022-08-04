<a href="https://github.com/GeeksB15/guia-referencia-js">voltar</a>

# Manipular datas

pacote npm utilizado

https://www.npmjs.com/package/dayjs

```sh
npm install dayjs --save
```
```js
const dayjs = require('dayjs')

dayjs()
  .startOf('month')
  .add(1, 'day')
  .set('year', 2018)
  .format('YYYY-MM-DD HH:mm:ss')


dayjs('2018-08-08') // converte

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // formata

dayjs()
  .set('month', 3)
  .month() // get & set

dayjs().add(1, 'year') // manipula

 sqlx = ` select 
      '${dayjs(i.DATA).format('YYYY-MM-DD')}' Data,
      '${dayjs(i.HORA).format('HH:mm:ss')}' hora
      `
```

