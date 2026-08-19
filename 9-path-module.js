const path = require('path');

console.log(path.sep);

const filepath = path.join('/content' , '/subfolder' , '/test.txt');
console.log(filepath);

const base = path.basename(filepath)
console.log(base);

const real = path.resolve(__dirname , 'content' , 'subfloder' , 'test.txt')
console.log(real);
