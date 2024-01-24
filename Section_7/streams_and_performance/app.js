let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(1337, '127.0.0.1');