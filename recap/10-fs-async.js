const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, '..', 'content', 'first.txt');

console.log("1. start");
fs.readFile(filepath, 'utf-8', (err, text) => {
    if (err) {
        console.log(err.message);
        return;
    } else {
        console.log(`step 1: ${text}`);
    }
});
console.log("3. end");

// ===== Step 1: predict the order =====
// QUESTION: in what order will "1. start", "3. end" and the file text print?
// MY GUESS:  1. start → 3. end → file text
//            because readFile only STARTS the read and moves on;
//            the callback runs later, after all the top-level code
// RESULT:    1. start → 3. end → file text


const filepath1 = path.join(__dirname, '..', 'content', 'missing.txt');
try {
    fs.readFile(filepath1, 'utf-8', (err, text) => {
        if (err) {
            console.log(`step 2 error: ${err.message}`);
            console.log(`step 2 error code: ${err.code}`);
            console.log(`step 2 error name: ${err.name}`);
            return;
        } else {
            console.log(`step 2: ${text}`);
        }
    });
} catch (error) {
    console.log(error.message);
}

// ===== Step 2: async error =====
// QUESTION: will the catch block on line 30 run? what prints instead?
// MY GUESS:  no the catch will not run why means it can not identify the error of the async function
// RESULT:    message: ENOENT: no such file..., code: ENOENT, name: Error
// WHY:       the catch only works for sync program files


const filepath2 = path.join(__dirname, '..', 'content', 'second.txt');

let first, second;

fs.readFile(filepath, 'utf-8', (err, text01) => {
    if (err) {
        console.log(err.message);
        return;
    } else {
        first = text01;
    }
});

fs.readFile(filepath2, 'utf-8', (err, text02) => {
    if (err) {
        console.log(err.message);
        return;
    } else {
        second = text02;
    }
});

console.log(`step 3 result : ${first} , ${second}`);

// ===== Step 3: side by side (broken on purpose) =====
// QUESTION: what will `result: ${first}, ${second}` print?
// MY GUESS:  undefined
// RESULT:    result : undefined , undefined
// WHY:       the print statement is outside the callback functions so it will not run because the read funtion is already completed its task
   

const testpath = path.join(__dirname, '..', 'content', 'recap-async.txt');
fs.readFile(filepath, 'utf-8', (err, text03) => {
    if (err) {
        console.log(err.message);
        return;
    }
    fs.readFile(filepath2, 'utf-8', (err, text04) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log(`step 4 result : ${text03} , ${text04}`);

// ===== Step 5: writeFile callback =====
// QUESTION: if I add a second parameter to the writeFile callback, what will it be?
// MY GUESS:  undefined because writeFile does not return anything to the callback
// RESULT:    undefined
// WHY:       it was defined by nodejs



        fs.writeFile(testpath, `${text03} , ${text04}`, (err , result) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log("done writing to file");
            console.log(`step 5 result : ${result}`);


            fs.readFile(testpath, 'utf-8', (err, text05) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
                console.log(`step 4 result : ${text05}`);
            });
        });
    });
});


// ===== Step 4: nested, in the right order =====
// QUESTION: what will content/recap-async.txt contain after running?
//           will "done writing to file" ever print BEFORE the result line?
// MY GUESS:  matter of frist readFile and second readFile, the result will be written to recap-async.txt and "done writing to file" will print after the result line
// RESULT:    	the file contains hello this is first text file , hello this is second text file; done writing printed after the result line
