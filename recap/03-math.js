const version = "1.0.0";

const add = (a ,b) => {
    return a + b;
}

const subtract = (a ,b) => {
    return a - b;
}

function multiply(a ,b) {
    return a * b;
}   

const divide = (a ,b) => {
    return a / b;
}

module.exports = {
    version,
    add,
    subtract,
    multiply,
    divide
}