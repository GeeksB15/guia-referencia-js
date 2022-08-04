<a href="https://github.com/GeeksB15/guia-referencia-js">voltar</a>

# Para acessar SQL Server

pacote npm utilizado

https://www.npmjs.com/package/mssql
```sh
npm install mssql
```
```js
const sql = require('mssql')

async function main() {
 await sql.connect({
    user: 'usuario',
    password: 'senha',
    server: 'mssql.b15.com.br',
    port: 1433,
    database: 'bancodados',
    options: {
      "enableArithAbort": true
      , language: "Brazilian"
    }
  })

  const sqlx = `SET LANGUAGE  Brazilian; 
  select * from tabela WHERE convert(date, DataEmissao) between '${de}' and '${ate}' 
  `
  
  const result = await sql.query(sqlx)
}
main()
```
