const path = require("path");
console.log(path.sep);

const filepath = path.join('/content' , '/subfolder' , '/test.txt');
console.log(filepath);// it will change according to the os used in the system

const base = path.basename(filepath)
console.log(base);// it remains the same as windows

const extname = path.extname(filepath)
console.log(extname);// it remains the same as windows

const dirname= path.dirname(filepath)
console.log(dirname);// it will change according to the os used in the system

const real = path.join(__dirname , '/content', '/test.txt')
console.log(real);// it will change according to the os used in the system

const realpath = path.resolve(__dirname , 'content' , 'test.txt')
console.log(realpath);// it will change according to the os used in the system
