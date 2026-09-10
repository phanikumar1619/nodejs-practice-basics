let count = 5;

const ticket = setInterval( () => {
    if(count >= 1){
        console.log(`Count: ${count}`);
        count--;
    }else if(count === 0){
        console.log("Liftoff!");
        clearInterval(ticket);
    }
}, 1000)