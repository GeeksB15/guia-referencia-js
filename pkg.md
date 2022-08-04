<a href="https://github.com/GeeksB15/guia-referencia-js">voltar</a>

pacote npm utilizado

https://www.npmjs.com/package/pkg

## Para gerar executável (pacote PKG)

### instalar pacote pkg
```sh
npm i pkg -g
```
### gerar o executável
```sh
pkg index.js -t node16-win-x64 
```
### colocar no package.json
``` json
{
 "bin": "index.js",
}
```