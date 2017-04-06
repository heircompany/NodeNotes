'use strict';
const EventEmitter = require('events');
// const util = require('util');

module.exports = class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello World!';
    }
    greet(data) {
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
}

// // constructor function
// function Greetr() {
//     // invoke EventEmitter function constructor
//     // add on custom properties and methods
//     // pass newly created object as a reference
//     // now we can add our own properties and methods
//     // it's a super constructor
//     EventEmitter.call(this);
//     this.greeting = 'Hello World!';
// }
//
// // inherit via prototype, get access to Node EventEmitter
// util.inherits(Greetr, EventEmitter);
//
// // event prototype emits this function and our desired data
// Greetr.prototype.greet = function(data) {
//     console.log(this.greeting + ': ' + data);
//     this.emit('greet', data);
// }


// THIS CAN BE EXPORTED! (require in new files though)
// new Object
const greeter1 = new Greetr();

// new event on top of emitter
greeter1.on('greet', function(data) {
    console.log('someone greeted yo: ' + data);
});

// run the new event
greeter1.greet('Joe');
