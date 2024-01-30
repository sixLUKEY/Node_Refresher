let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let port = process.env.PORT || 3000;

let urlEncodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
    console.log(`Request Url: ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api', (req, res) => {
    res.json({ firstName: 'John', lastName: 'Evans' })
});

app.get('/person/:id', (req, res) => {
    res.render('person', { id: req.params.id, qstr: req.query.qstr })
});

app.post('/person', urlEncodedParser, (req, res) => {
    res.send('Thank You');
    console.log(req.body.firstName);
    console.log(req.body.lastName);
});

app.post('/personjson', jsonParser, ( req, res ) => {
    res.send('Thank you for the json data');
    console,log(req.body.firstName);
    console,log(req.body.lastName);
});

app.get('/api/person/:id', (req, res) => {
    // Fetch data from database
    // res.json({ data });
});

app.post('/api/person', jsonParser, (req, res) => {
    // Save to database
});

app.delete('/api/person/:id', (req, res) => {
    // Delete data from database
})

app.listen(port);