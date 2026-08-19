const fs = require('fs')
const { readFileSync } = require('fs')

const first = readFileSync('./content/first.txt' , 'utf8')
const second = fs.readFileSync('./content/second.txt' , 'utf8');

console.log(first , second);

fs.writeFileSync('./content/result-sync.txt' ,`here is the result : ${first} , ${second}` , {flag : 'a'}) // "append(add the typed text at last) the data every time when we run the code"


//fs.writeFileSync('./content/result-sync.txt' ,`here is the result : ${first} , ${second}`) "replace the data every time when we run the code"