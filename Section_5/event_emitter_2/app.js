let Emitter = require('events');
let eventConfig = require('./config').events;

let emtr = new Emitter();

emtr.on(eventConfig.GREET, () => {
    console.log('Somewhere along the line someone said hello');
})

emtr.emit(eventConfig.GREET);