const path = require("path");
const fs = require("fs");

const data = process.argv.slice(2);

const filepath = path.join(__dirname , '..' , 'content' ,  'notes.txt');

if(data.length === 0){
    console.log("Please give some notes.  Example: node 09-notes.js 'my notes'");
}else{
    fs.writeFileSync(filepath , `${data.join(' ')}\n` , {flag : 'a'});
    const text = fs.readFileSync(filepath , 'utf-8');
    const lines = text.split('\n');
    const notes = lines.filter((line) => line.trim() !== '');
    for(let i = 1 ; i <= notes.length ; i++){
        console.log(`${i}. ${notes[i-1]}`);
    }
}