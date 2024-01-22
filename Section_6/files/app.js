let fs = require('fs');

let greet = fs.readFileSync(__dirname + '/greet.txt');
console.log(greet);

let greet2 = fs.readFile(__dirname + '/greet.txt', ( err, data ) => {
    return data;
})
console.log(greet2);