let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
    console.log(`Request Url: ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/api', (req, res) => {
    res.json({ firstName: 'John', lastName: 'Evans' })
})

app.get('/person/:id', (req, res) => {
    res.render('person', { id: req.params.id })
})

app.listen(port);