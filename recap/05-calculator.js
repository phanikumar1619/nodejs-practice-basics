const { log } = require('./04-logger');
const { add, subtract, multiply, divide } = require('./03-math');
// require('./03-math'); proved module caching — runs once
// require('./03-math'); proved module caching — runs once


const a = 10;
const b = 5;

// divide can return null, so it needs handling the others don't
const showDivision = (x , y) => {
    const result = divide(x , y);
    if(result === null){
        log("Division" , "Cannot divide by zero");
    }else{
        log("Division" , result);
    }
};

log("Addition" , add(a , b));
log("Subtraction" , subtract(a , b));
log("Multiplication" , multiply(a , b));
showDivision(a ,  b);
showDivision(a ,  0);
// console.log(version);ReferenceError — version is not exported
