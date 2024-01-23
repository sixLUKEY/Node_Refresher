let fs = require('fs');

let readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 1024});

let writeable = fs.createWriteStream(__dirname + '/greetCopy.txt');

readable.on('data', (chunk) => {
    console.log(chunk.length);
    writeable.write(chunk);
});