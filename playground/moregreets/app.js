const greet1 = require('./greet1');
greet1();

const greet2 = require('./greet2').greet;
greet2();

const greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'CHANGED!';

const greet3b = require('./greet3');
greet3b.greet();

// deprecated?
const greet4 = require('./greet4');
let grtr = new Greet4();
grtr.greet();

// REVEALING MODULE PATTERN IS THE BEST
// expose only desired properties and methods we want
// natural code protection
const {greet} = require('./greet5');
greeting();
