let util = require('util');

let name = 'Luke';
let greeting = util.format('Hello, %s', name);
util.log(greeting);