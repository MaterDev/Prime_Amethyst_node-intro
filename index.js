// Module makes code "modular"
let arrayOfPeople = require('./people.js');
let myFunFunction = require('./funfunctions.js');

console.log('My people:', arrayOfPeople);
console.log('FunFunction #1', myFunFunction.yolo());
console.log('FunFunction #2', myFunFunction.mojo());
