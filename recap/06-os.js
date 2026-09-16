const currentos = require("os");

// console.log(`type of os used in the my system: ${currentos.type()}`)
// console.log(`the version of my system: ${currentos.release()}`)
// console.log(`name of the system: ${currentos.hostname()}`)
// console.log(currentos.uptime())
// console.log(currentos.totalmem())
// console.log(currentos.freemem())

const { totalmem , uptime} = require("os");
const gb = totalmem()/(1024 * 1024 * 1024);
console.log(`Total Memory: ${gb.toFixed(1)} GB`)

const days = uptime()/86400;
const hours = uptime() / (60 * 60);
console.log(`Uptime: ${days.toFixed(1)} days`)
console.log(`Uptime: ${hours.toFixed(1)} hours`)

const per = (totalmem() - currentos.freemem())/totalmem() * 100;
console.log(`Memory Usage: ${per.toFixed(1)}%`)