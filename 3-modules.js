// CommonJS, every file is a module (by default)
//modules  - encapsulated code (only share minimum)
const names = require('./4-names');
const { adding , sayhi } = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade')
// console.log(data);



sayhi("phani kumar")
sayhi(names.papan)
sayhi(names.bargav);

// adding(names.number1 , names.number2)