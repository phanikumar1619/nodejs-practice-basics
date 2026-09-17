const fs = require("fs");
const path = require("path");

// Step 1: build paths 
const filepath1 = path.join(__dirname , '..' , 'content' , 'first.txt');
const filepath2 = path.join(__dirname , '..' , 'content' , 'second.txt');

// Step 2: read both files 
const file1 = fs.readFileSync(filepath1 , 'utf-8' );
const file2 = fs.readFileSync(filepath2 , 'utf-8' );

console.log(file1);
console.log(file2);

console.log(typeof(file1));
console.log(typeof(file2));

// Step 3: Buffer experiment 

// const file01 = fs.readFileSync(filepath1);
// const file02 = fs.readFileSync(filepath2);

// console.log(file01);
// console.log(file02);

// Old experiment: wrote into first.txt (unsafe)

// fs.writeFileSync(filepath1 , 'hello this is first text file',{ flag : 'a'});
// fs.writeFileSync(filepath1 , '\nhello this is phani kumar' , { flag : 'a' });


// fs.writeFileSync(filepath1 , 'hello this is first text file' );
// const data = fs.readFileSync(filepath1 , 'utf-8');
// console.log(data);

// Step 4 + 6: append result to recap-sync.txt
const filepath = path.join(__dirname , '..' , 'content' , 'recap-sync.txt');
const testpath = path.join(__dirname , '..' , 'content' , 'subfolder' , 'recap-test.txt');

try {
    fs.writeFileSync(filepath , `Here is the result : ${file1} and ${file2}\n`, { flag : 'a' });
    const data = fs.readFileSync(filepath , 'utf-8');
    console.log(data);
    fs.writeFileSync(filepath , 'hello this is phani kumar\n', { flag : 'a' });
    const appendData = fs.readFileSync(filepath , 'utf-8');
    console.log(appendData);
    fs.writeFileSync(testpath , 'hello this is test text file in my recap folder\nhello my name is phani kumar');// replaces the whole file every run
    const data1 = fs.readFileSync(testpath , 'utf-8');
    console.log(data1);
} catch (err) {
    console.log(`caught it! err.message = ${err.message}`);
    console.log(`caught it! err.code = ${err.code}`);
    console.log(`caught it! err.name = ${err.name}`);
}

// Step 7: read a missing file 
try {
    const testfilepath = path.join(__dirname , '..' , 'content' , 'subfolder' , 'missing.txt');
    const data2 = fs.readFileSync(testfilepath , 'utf-8');
    console.log(data2);
} catch (err) {
    console.log(`caught it! err.message = ${err.message}`);
    console.log(`caught it! err.code = ${err.code}`);
    console.log(`caught it! err.name = ${err.name}`);
}
console.log('program is still running');