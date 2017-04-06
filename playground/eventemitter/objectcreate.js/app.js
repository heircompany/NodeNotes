const Emitter = require('events');
const eventConfig = require('./config').events;
const emtr = new Emitter();

// emit ON greet property invocations, which is an event
emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone says hello.');
});

emtr.on(eventConfig.GREET, function() {
    console.log('A greeting occured!');
});

//when something happens:
console.log('Hello!');
//emit an event
emtr.emit('greet');

const obj = {
    name: 'Joe Grotto',
    greet: function() {
        console.log(`HEY ${this.name}`);
    }
}

obj.greet();
// replace the this keyword for this object
// call can be passed parameters comma by comma
obj.greet.call({name: 'Joey Grotto'});
// apply does the same but passes parameters by array
obj.greet.apply({name: 'Joseph Grotto'});


// PROTOTYPE CHAIN
// OBJECTS THAT HAVE EACH OTHER'S PROPERTIES/METHODS
const person = {
    firstname: ' ',
    lastname: ' ',
    greet: function() {
        return this.firstname + " " + this.lastname;
    }
}

const joe = Object.create(person);
    joe.firstname = 'joe';
    joe.lastname = 'grotto';

const ryan = Object.create(person);
    ryan.firstname = 'ryan';
    ryan.lastname = 'sobbe';

    console.log(joe.greet());
    console.log(ryan.greet());
