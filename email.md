
<a href="https://github.com/GeeksB15/guia-referencia-js">voltar</a>

# Para enviar email

pacote npm utilizado

https://www.npmjs.com/package/nodemailer

https://nodemailer.com/about/

```sh
npm install nodemailer

```
```js

const nodemailer = require('nodemailer')

const smtpOpts = {
  host: 'smtp.gmail.com',
  port: 587,
  //port: 465,
  //secure: true,
  auth: {
    user: 'usuario@dominio.com.br',
    pass: 'senha'
  },
  tls: {
    ciphers: 'SSLv3'
  }
}
const transporter = nodemailer.createTransport(smtpOpts)

async function enviarEmail(obj) {
  const message = await (new Promise((resolve, reject) => {
    transporter.sendMail(obj, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve('E-mail enviado com sucesso')
      }
    })
  }))
  //console.log(message)
}

const html = fs.readFileSync('modelo.html').toString()

const attachments = []
attachments.push({ 'arquivo.pdf', '/docs/' })

await enviarEmail({
      from: 'a@bbb.com.br',
      to: c.emailx, 
      cc: c.email,
      subject: 'Assunto',
      bcc: 'a@dominio.com.br;b@dominio.com.br;,
      html,
      attachments
    })

```
---

### Ativar email menos seguro
  https://www.google.com/settings/security/lesssecureapps  
