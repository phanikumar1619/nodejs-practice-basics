const sayhi = (name) => {
    console.log(`hello there ${name}`)
}


const adding = (number1, number2) => {
    const result = number1 + number2;
    console.log(`the result of two numbers is ${result}`)
}

// export default
module.exports = { sayhi , adding }
