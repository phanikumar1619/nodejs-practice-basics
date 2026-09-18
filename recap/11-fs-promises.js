const path = require('path');
const fsp = require('fs/promises');

const filepath1 = path.join(__dirname, '..', 'content', 'first.txt');
const filepath2 = path.join(__dirname, '..', 'content', 'second.txt');
const testfilepath = path.join(__dirname, '..', 'content', 'recap-promise.txt');
const testfile = path.join(__dirname, '..', 'content', 'missing.txt');

const main = async () => {
    // const first = await fsp.readFile(filepath1, 'utf-8'); the coding was correct but the readfile will work two different time i may take maore to complete the take
    // const second = await fsp.readFile(filepath2, 'utf-8');

    // the promise.all will work in parallel and it will take less time to complete the task
    const [first, second] = await Promise.all([
        fsp.readFile(filepath1, 'utf-8'),
        fsp.readFile(filepath2, 'utf-8')
    ]); // the promise.all is very important try to remember it
    
    console.log(`step 1 result : ${first} , ${second}`);


    // step 4
    // the await keyword done the work in 3 lines instead of 7 lines in the async callback function

    await fsp.writeFile(testfilepath, `result : ${first} , ${second}`);
    const text = await fsp.readFile(testfilepath, 'utf8');
    console.log(`step 4 : ${text}`);
};

//QUESTION : in what order will the 7 lines print, and why? 
// GUESS : 1. before main() → step 1 result : hello this is first text file , hello this is second text file → step 4 : result : hello this is first text file , hello this is second text file → 3. after main()
// WHY : because the async function is waiting for node to compleate the task and without it the terminal will try to print the task without node completed task
// RESULT : 1. before main() → step 1 result : hello this is first text file , hello this is second text file → step 4 : result : hello this is first text file , hello this is second text file → 3. after main()


console.log('1. before main()');

main();

console.log('3. after main()');

// step 1
// QUESTION : what will print, and in what order?
// MY GUESS : read first file and second file and then print the result in the console
// why : because the async function is waiting for the first file to be read and then it will read the second file and then print the result in the console
// RESULT : step 1 result : hello this is first text file , hello this is second text file


const main1 = async () => {
    const first = fsp.readFile(filepath1, 'utf-8');
    console.log('step 2 without await version result :', first, typeof (first));

    const first1 = await fsp.readFile(filepath1, 'utf-8');
    console.log('step 2 with await version result :', first1, typeof (first1));
};

main1();

// step 2
// QUESTION : what will print, and in what order?
// GUESS : read first file and print error or pending and then read first file and print text and fullfilled
// why : with await it will wait for node to compleate the task and without it the terminal will try to print the task without node completed task
// RESULT : step 2 without await version result : [object Promise] object
//          step 2 with await version result : hello this is first text file string

const main2 = async () => {
    try {
        const test1 = await fsp.readFile(testfile, 'utf-8');
        console.log(test1);
    } catch (error) {
        console.log('STEP 5 :',error.message, error.code);
    }
};
main2();

// step 5
// QUESTION : what will print, and in what order?
// GUESS : error message and error code
// why : because the file is missing and the catch block will catch the error and print the error message and error code
// RESULT : STEP 5 : ENOENT: no such file or directory, open 'C:\4year project\project\freeCodeCamp\content\missing.txt' ENOENT