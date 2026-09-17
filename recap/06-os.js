// const currentos = require("os");

// console.log(`type of os used in the my system: ${currentos.type()}`)
// console.log(`the version of my system: ${currentos.release()}`)
// console.log(`name of the system: ${currentos.hostname()}`)
// console.log(currentos.uptime())
// console.log(currentos.totalmem())
// console.log(currentos.freemem())

const { totalmem, uptime, freemem, type, release, hostname, userInfo} = require("os");
const currentOS = {
    type: type(),
    release: release(),
    hostname: hostname(),
    userInfo: userInfo().username
};
console.log(currentOS);
const seconds = uptime();
const gb = totalmem()/(1024 * 1024 * 1024);
console.log(`Total Memory: ${gb.toFixed(1)} GB`);

const days = seconds/86400;
const hours = seconds / (60 * 60);
console.log(`days: ${days.toFixed(1)} days`);
console.log(`hours: ${hours.toFixed(1)} hours`);

const free = freemem()/(1024 * 1024 * 1024);
console.log(`Free Memory: ${free.toFixed(1)} GB`);

const per = (totalmem() - freemem())/totalmem() * 100;
console.log(`Memory Usage: ${per.toFixed(1)}%`);