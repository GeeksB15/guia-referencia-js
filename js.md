<a href="https://github.com/GeeksB15/guia-referencia-js">voltar</a>

### string 

``` js

"ABCDEFGHIJKLMNOPQRSTUVWXYZ".length
// 26

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let length = text.length
// 26 


let str = "5"
str = str.padStart(4,0)
// result is 0005

// if
if (time < 10) {
  greeting = "Good morning"
} else if (time < 20) {
  greeting = "Good day"
} else {
  greeting = "Good evening"
}

//replace
let text = "Please visit Microsoft!"
let newText = text.replace("Microsoft", "W3Schools")

'abc'.toUpperCase()
//ABC

'ABC'.toLowerCase()
//'abc'

' 123456 '.trim()
// 123456

// Template Strings
let firstName = "John"
let lastName = "Dove"
let text = `Welcome ${firstName}, ${lastName}!`
//Welcome John Doe

// Template Strings
let price = 10
let VAT = 0.25
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`

//for
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>"
}

function numero(valor) {
  return new Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(valor)
}

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ')
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  }
  return splitStr.join(' ')
}

```


