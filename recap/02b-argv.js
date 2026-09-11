const x = process.argv[2];
const y = process.argv[3];

if(x === undefined || y === undefined){
    console.log("Please give two numbers.  Example: node 02b-argv.js 5 3");
}else if(isNaN(x) || isNaN(y)){
    console.log("Those are not numbers.  Example: node 02b-argv.js 5 3");
}else{
    const a = Number(x);
    const b = Number(y);
    const result = a + b;
    console.log(result)
}