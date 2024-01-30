let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
})

app.get('/api', (req, res) => {
    res.json({ firstName: 'John', lastName: 'Evans' })
})

app.listen(port);