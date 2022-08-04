# guia-referencia-js
Guia de referencia inicial para trabalhar com nodejs


---
### Ferramentas necessárias no PC
* nodejs v16
* npm
* Visual Studio Code
* git basicao pelo Vscode

---
## Sites
https://nodejs.org/pt-br/

https://nodejs.org/dist/latest-v16.x/docs/api/

https://code.visualstudio.com/download

https://www.w3schools.com/JS/js_operators.asp

---
### Conhecimentos basicos necessários
* package.json
* Como debugar
* let const
* criar funcoes
* manipular string
* manipular datas
* async await promise
* saber ler e gravar arquivos (modulo fs)
* fetch
* template string
---
### JS Javascript
<a href="https://github.com/GeeksB15/guia-referencia-js/blob/main/js.md">javascript guia</a>

<a href="https://github.com/GeeksB15/guia-referencia-js/blob/main/mssql.md">Para acessar SQL Server</a>

---
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







