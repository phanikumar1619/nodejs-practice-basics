console.log(__dirname);
console.log(__filename);
console.log(process.argv);


let count = 1;
const ticket =setInterval( () => {
    if(count <= 5){
        console.log(`Count: ${count}`);
        count++;
    }else{
        clearInterval(ticket);
    }
}, 1000)

