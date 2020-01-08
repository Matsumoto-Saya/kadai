const fs = require('fs')

// fs.writeFileSync('./kadai-9/hello.txt','こんにちわ')
const text = fs.readFileSync('./kadai-9/hello.txt')
console.log(text.toString())