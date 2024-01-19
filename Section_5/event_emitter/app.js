let Emitter = require('./emitter');

let emtr = new Emitter();

emtr.on('greet', () => {
    console.log('somewhere, someone is waving at you');
})

emtr.on('greet', () => {
    console.log('another greeting occured!!');
})

console.log('Hello');
emtr.emit('greet');

