let fs = require('fs');
let zlib = require('zlib');

let readable = fs.createReadStream(__dirname + '/greet.txt');

let writeable = fs.createWriteStream(__dirname + '/greetCopy.txt');

let compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

let gzip = zlib.createGzip();

readable.pipe(writeable);

readable.pipe(gzip).pipe(compressed);