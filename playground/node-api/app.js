// NODE API CORE MODULES
// wrappers as C++ code
// util.log adds formatting and timestamps
// folder location NOT required for native
const util = require('util');

const name = 'Joe';
const greeting = util.format('Hello, %s', name);
util.log(greeting);

// object properties and methods
const obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
// a string can be set to a variable in an array to retrieve a property from an object
const prop = 'greet';
console.log(obj[prop]);

//arrays can contain functions
const arr = [];
arr.push(function() {
    console.log('hello world 1');
});
arr.push(function() {
    console.log('hello world 2');
});
arr.push(function() {
    console.log('hello world 3');
});
//invoke them with an iterator
arr.forEach(function(item) {
    item();
});
