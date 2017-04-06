const Emitter = require('./emitter');
const emtr = new Emitter();

// emit ON greet property invocations, which is an event
emtr.on('greet', function() {
    console.log('Somewhere, someone says hello.');
});

emtr.on('greet', function() {
    console.log('A greeting occured!');
});

//when something happens:
console.log('Hello!');
//emit an event
emtr.emit('greet');
