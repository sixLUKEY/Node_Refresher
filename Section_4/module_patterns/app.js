let greet = require("./greet1");
greet();

let greet2 = require("./greet2").greet;
greet2();

let greet3 = require("./greet3");
let greeting = new greet3();

greet3.greet(greeting);

var greet4 = require('./greet4').greet;
greet4();